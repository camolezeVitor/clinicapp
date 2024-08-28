import { Injectable, Type } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DynamicComponentCreationService {

    /**
     * @author camolezeVitor_ 
     * @description
     * Método utilizado para validar se o componente implementa a interface
     * DynamicComponentProtocol e também utiliza o decorator @Dynamic.
     * @param component 
     */
    private validateImplementation(component: Type<any> | any | unknown) {

        if (component.dynamicComponentΔ == undefined || component.dynamicServiceΔ == undefined) 
            throw Error("Protocolo dinâmico não implementado!");

        if (component.constructor.prototype.dynamicHandler == undefined) 
            throw Error("Decorator @Dynamic não implementado!");

    }

    observeChanges(component: Type<any> | any | unknown): Observable<any> {
        this.validateImplementation(component);
        const handler = component.constructor.prototype.dynamicHandler;
        return (handler.templateSubject$ as BehaviorSubject<any>).asObservable();
    }
}