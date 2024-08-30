import { Template } from "@mapping/types";

export class DynamicStorager<T> {

    private componentStorage!: Map<T, Function>;

    constructor(components: Array<Template<T>>) {
        this.instantiateComponentStorage(components);
    }

    private instantiateComponentStorage(components: Array<Template<T>>) {
        this.componentStorage = new Map<T, Function>(
            components.map(element => ([element.condition, element.component]))
        );
    }

    public getElement(condition: T) {
        return this.componentStorage.get(condition);
    }
    
}