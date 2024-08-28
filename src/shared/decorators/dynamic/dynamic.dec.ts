import { DynamicType } from "./dynamic.types";
import { DynamicHandler } from "./dynamic.handler";

export function Dynamic<T>({componentTemplates, parameter}: DynamicType<T>) {

    return function(constructor: Function) {
        
        constructor.prototype.dynamicHandler = new DynamicHandler<T>(
            parameter, 
            componentTemplates,
        )

    }
}