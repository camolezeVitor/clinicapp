import { Injectable, NgZone, Type } from "@angular/core";
import { DynamicComponentObservationService } from "@services";
import { DynamicHandlerProtocol } from "./dynamic-handler.protocol";
import { Template } from "@mapping/types";
import { BehaviorSubject } from "rxjs";

export interface DynamicComponentProtocol {
    dynamicComponent__: Type<any> | Function | null | undefined;
    dynamicService__: DynamicComponentObservationService;
    ngZone: NgZone;
    clearComponent(): void;
}

export interface DynamicComponentConfig<T> {
    templates: Array<Template<T>>,
    handler: DynamicHandlerProtocol<T> | BehaviorSubject<T> | any,
    defaultComponent?: Type<any>,
    loadingComponent?: Type<any>,
}

export interface DynamicFather<T> {
    config: DynamicComponentConfig<T>;
}