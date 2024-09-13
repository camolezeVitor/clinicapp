import { EventEmitter, OutputEmitterRef, Type } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export type Template<T> = {
    component: Type<any>,
    condition: T;
};

export type DynamicType<T> = {
    parameter: BehaviorSubject<any>;
    componentTemplates: Array<Template<T>>;
};

export type DynamicChild<T> = {
    [K in keyof T as `handle$${K & string}`]: EventEmitter<any> | OutputEmitterRef<any>;
} & T;