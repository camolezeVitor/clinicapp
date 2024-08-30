import { inject, NgZone, Type } from "@angular/core";
import { DynamicComponentProtocol, DynamicHandlerProtocol } from "@mapping/protocols";
import { Template } from "@mapping/types";
import { DynamicComponentCreationService } from "@services";
import { BehaviorSubject } from "rxjs";
import { DynamicStorager } from "./dynamic-storager";


type DynamicComponentConfig<T> = {
    templates: Array<Template<T>>,
    handler: DynamicHandlerProtocol<T> | BehaviorSubject<T>,
    defaultComponent?: Type<any>,
    loadingComponent?: Type<any>
}

export abstract class DynamicComponent<T> implements DynamicComponentProtocol {

    dynamicStorager__ : DynamicStorager<T>;
    dynamicComponent__: Type<any> | Function | undefined;
    dynamicService__: DynamicComponentCreationService = inject(DynamicComponentCreationService);
    ngZone: NgZone = inject(NgZone);

    constructor(config: DynamicComponentConfig<T>) {

        this.dynamicComponent__ = config.defaultComponent || config.loadingComponent;

        this.dynamicStorager__ = new DynamicStorager<T>(config.templates)

        this.dynamicService__.observeHander(config.handler).subscribe(state => {
            this.setComponent(state);
        });
    }

    private setComponent(state: T) {
        this.ngZone.run(() => {
            this.dynamicComponent__ = this.dynamicStorager__.getElement(state);
        });
    }

    public clearComponent() {
        this.dynamicComponent__ = undefined;
    }
};