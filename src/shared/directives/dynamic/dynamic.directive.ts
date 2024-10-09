import { AfterViewInit, ComponentRef, Directive, EventEmitter, Inject, inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, Type, ViewContainerRef } from "@angular/core";
import { DynamicComponentObservationService } from "@services";
import { DynamicComponentConfig } from "src/shared/mapping/protocols/dynamic.protocol";
import { DynamicStorager } from "./dynamic.storager";
import { DynamicValidation } from "./dynamic.validation";
import { isPlatformBrowser } from "@angular/common";

export type UserInputs = Object;
export type UserOutputs = {[key: string]: Function};

@Directive({
    selector: "[Dynamic]",
    standalone: true
})
export class Dynamic implements AfterViewInit, OnChanges {
       
    @Input("Dynamic") config!: DynamicComponentConfig<any>;
    @Input() inputs?: UserInputs;
    @Input() outputs?: UserOutputs;

    private isBrowser: boolean = false;

    private selectedComponent!: Type<any>
    private selectedComponentRef!: ComponentRef<any>;

    private __dynamicStorager!: DynamicStorager<string>;
    private __dynamicComponentObservationService: DynamicComponentObservationService = inject(DynamicComponentObservationService);

    private viewContainerRef: ViewContainerRef = inject(ViewContainerRef);

    constructor( @Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngAfterViewInit(): void {
        if (this.isBrowser) this.build();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.selectedComponentRef) {
            this.bindValues(this.selectedComponentRef);
        }
    }

    private build() {
        this.__dynamicStorager = new DynamicStorager<string>(this.config.templates);
        this.observeToHandlerChangesAndAnswerIt(this.config);
    }
    
    private observeToHandlerChangesAndAnswerIt({handler}: DynamicComponentConfig<any>) {
        this.__dynamicComponentObservationService.observeHandler(handler).subscribe(state => {
            if (state) {
                if (this.selectedComponentRef) this.destroyComponent();
                this.createComponent(state);
            };
        })
    }

    private createComponent(state: string) {
        const component = this.__dynamicStorager.get(state);
        DynamicValidation.validateIfIsComponentImplemented(component, state);
        this.selectedComponent = component!;
        this.selectedComponentRef = this.viewContainerRef.createComponent(component!);
        this.checkIfIsEverythingOkBetweenFatherAndSon();
        this.bindValues(this.selectedComponentRef);
    }

    private destroyComponent() {
        this.viewContainerRef.clear();
    }

    private checkIfIsEverythingOkBetweenFatherAndSon() {
        DynamicValidation.validateIfInputsAreCorrectlyInstantiated(this.selectedComponentRef, this.inputs);
        DynamicValidation.validateIfOutputsAreCorrectlyInstantiated(this.selectedComponentRef, this.outputs);
    }

    private bindValues(componentRef: ComponentRef<any>) {
        if (this.inputs) this.bindInputs(componentRef);
        if (this.outputs) this.bindOutputs(componentRef);
    }

    private bindInputs({instance}: ComponentRef<any>) {
        Object.keys(this.inputs!).forEach(key => {
            instance[key] = (this.inputs! as any)[key];
        });
    }

    private bindOutputs({instance}: ComponentRef<any>) {
        Object.keys(this.outputs!).forEach(key => {
            (instance[key] as EventEmitter<any>).asObservable().subscribe(($event) => {
                this.outputs![key]($event);
            })
        });
    }

}