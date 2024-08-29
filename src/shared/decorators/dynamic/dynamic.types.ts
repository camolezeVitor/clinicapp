import { BehaviorSubject } from "rxjs";

export type Template<T> = {
    component: Function,
    condition: T;
};

export type DynamicType<T> = {
    parameter: BehaviorSubject<any>;
    componentTemplates: Array<Template<T>>;
};

export const DynamicTemplate = `@if(dynamicComponent__){<ng-component-outlet [ngComponentOutlet]="dynamicComponent__"/>}`;
