import { BehaviorSubject } from "rxjs"
import { Template } from "./dynamic.types"
import { Type } from "@angular/core";

export class DynamicHandler<T> {

    private actualValidationValue: T;
    private componentsMap: Map<T, Type<any>>;
    public templateSubject$: BehaviorSubject<Type<any>>;

    constructor(
        private changeListener$: BehaviorSubject<any>,
        templates: Array<Template<T>>,
    ) {
        this.actualValidationValue = this.changeListener$.getValue();
        this.componentsMap = new Map(templates.map(template => [template.condition, template.component]));
        this.templateSubject$ = new BehaviorSubject<Type<any>>(this.componentsMap.get(this.actualValidationValue)!);

        this.changeListener$.subscribe(() => 
            this.validateChangeAndEmitOutput()
        )
    }

    validateChangeAndEmitOutput() {
        if (this.actualValidationValue != this.changeListener$.getValue()) {
            this.actualValidationValue = this.changeListener$.getValue();
            this.templateSubject$.next(this.componentsMap.get(this.actualValidationValue)!);
        }
        return;
    }
}
