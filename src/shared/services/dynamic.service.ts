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

        //TEM QUE FAZER A VALIDAÇÃO FUTURAMENTE

    }

    observeChanges(component: Type<any> | any | unknown): Observable<any> {
        this.validateImplementation(component);
        const handler = component.constructor.prototype.dynamicHandler;
        return (handler.templateSubject$ as BehaviorSubject<any>).asObservable();
    }
}