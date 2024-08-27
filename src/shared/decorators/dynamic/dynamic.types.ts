import { Type } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export type Template<T> = {
    component: Type<any>,
    condition: T;
}

export type DynamicType<T> = {
    parameter: BehaviorSubject<any>;
    componentTemplates: Array<Template<T>>;
}
