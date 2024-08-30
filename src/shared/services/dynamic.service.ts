import { HostAttributeToken, inject, Injectable } from "@angular/core";
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

    //Inicialmente sempre que chamado ele verifica o tipo do handler
    //se é uma classe do usuário ou é um BS
    private getImplementationType(handler: DynamicHandlerProtocol<any> | BehaviorSubject<any>): "BS" | "DH" {
        //DH e BS servem para DynamicHandler e BehaviorSubject.
        return ((handler as BehaviorSubject<any>).getValue === undefined) ? "DH" : "BS";
    }
 
    //Método utilizado para fazer juz o nome da classe
    observeHandler(handler: DynamicHandlerProtocol<any> | BehaviorSubject<any>): Observable<any> {

        if (this.getImplementationType(handler) == "BS") {
            return (handler as BehaviorSubject<any>).asObservable();
        }

        const handlerImpl = inject(handler as any as HostAttributeToken) as any as DynamicHandlerProtocol<any>;
        
        return handlerImpl.templateSubject$.asObservable();
    } 
}