import { Injectable, Injector } from "@angular/core";
import { DynamicHandlerProtocol } from "@mapping/protocols";
import { BehaviorSubject, Observable } from "rxjs";

/**
 * @author camolezeVitor_
 * @description
 * Serviço utilizado para detectar mudanças no handler ou no behavior subject que foi
 * passado como um parâmetro.
 */
@Injectable({
    providedIn: "root"
})
export class DynamicComponentObservationService {

    constructor(private injector: Injector) {} // Injete o Injector no construtor

    private getImplementationType(handler: DynamicHandlerProtocol<any> | BehaviorSubject<any>): "BS" | "DH" {
        return ((handler as BehaviorSubject<any>).getValue === undefined) ? "DH" : "BS";
    }
 
    observeHandler(handler: DynamicHandlerProtocol<any> | BehaviorSubject<any>): Observable<any> {
        if (this.getImplementationType(handler) == "BS") {
            return (handler as BehaviorSubject<any>).asObservable();
        }

        // Use o injector para injetar o handler aqui
        const handlerImpl = this.injector.get(handler as any) as DynamicHandlerProtocol<any>;

        return handlerImpl.templateSubject$.asObservable();
    } 
}