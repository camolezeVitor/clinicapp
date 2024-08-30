import { NgZone, Type } from "@angular/core";
import { DynamicComponentObservationService } from "@services";

export interface DynamicComponentProtocol {
    dynamicComponent__: Type<any> | Function | null | undefined;
    dynamicService__: DynamicComponentObservationService;
    ngZone: NgZone;
    clearComponent(): void;
}