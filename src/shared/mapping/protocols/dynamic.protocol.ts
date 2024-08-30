import { NgZone, Type } from "@angular/core";
import { DynamicComponentCreationService } from "@services";

export interface DynamicComponentProtocol {
    dynamicComponent__: Type<any> | Function | null | undefined;
    dynamicService__: DynamicComponentCreationService;
    ngZone: NgZone;
    clearComponent(): void;
}