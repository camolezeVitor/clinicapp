import { Type } from "@angular/core";
import { Template } from "src/shared/utils/models/types";

//Classe responsável por armazenar os componentes dinâmicos dentro da diretiva
export class DynamicStorager<T> {
    
    componentMap: Map<T, Type<any>>;

    constructor(templates: Array<Template<T>>) {
        this.componentMap = new Map<T, Type<any>>(
            templates.map(element => [element.condition ,element.component] as const) 
        );
    }

    get (state: T): Type<any> | undefined {
        return this.componentMap.get(state);
    }
}