import { BehaviorSubject } from "rxjs"
import { Template } from "./dynamic.types"

export class DynamicHandler<T> {

    private actualValidationValue: T;
    private componentsMap: Map<T, Function>;
    public templateSubject$: BehaviorSubject<Function>;

    constructor(
        private changeListener$: BehaviorSubject<any>,
        templates: Array<Template<T>>,
    ) {
        this.actualValidationValue = this.changeListener$.getValue();
        this.componentsMap = new Map(templates.map(template => [template.condition, template.component]));
        this.templateSubject$ = new BehaviorSubject<Function>(this.componentsMap.get(this.actualValidationValue)!);

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
