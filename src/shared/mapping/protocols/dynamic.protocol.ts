import { Type } from "@angular/core";
import { DynamicComponentCreationService } from "@services";

export interface DynamicComponentProtocol {
    dynamicComponentΔ: Type<any> | null | undefined;
    dynamicServiceΔ: DynamicComponentCreationService
}