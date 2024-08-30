import { HostAttributeToken, inject, Injectable, Type } from "@angular/core";
import { DynamicHandlerProtocol } from "@mapping/protocols";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DynamicComponentCreationService {

    private getImplementationType(handler: DynamicHandlerProtocol<any> | BehaviorSubject<any>): "BS" | "DH" {
        return ((handler as BehaviorSubject<any>).getValue === undefined) ? "DH" : "BS";
    }
 
    observeHandler(handler: DynamicHandlerProtocol<any> | BehaviorSubject<any>): Observable<any> {

        if (this.getImplementationType(handler) == "BS") {
            return (handler as BehaviorSubject<any>).asObservable();
        }

        const handlerImpl = inject(handler as any as HostAttributeToken) as any as DynamicHandlerProtocol<any>;
        
        return handlerImpl.templateSubject$.asObservable();
    } 
}