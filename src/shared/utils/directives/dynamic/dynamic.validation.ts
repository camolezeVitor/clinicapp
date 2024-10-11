import { ComponentRef, EventEmitter, Type } from "@angular/core";
import { UserInputs, UserOutputs } from "./dynamic.directive";

export class DynamicValidation {
    
    static validateIfInputsAreCorrectlyInstantiated(componentRef: ComponentRef<any>, userInputs?: UserInputs) {
        const inputs = (componentRef as any)._tNode.inputs;
        
        if (!userInputs && !inputs) return;

        if (userInputs && !inputs) {
            throw new Error("Inputs foram fornecidos, mas o componente filho não requer inputs.");
        }

        if (!userInputs && inputs) {
            throw new Error("O componente filho requer inputs, mas nenhum foi fornecido pelo componente pai.");
        }

        const componentInputs = Object.keys(inputs);
        const providedInputs = new Set<string>(Object.keys(userInputs!));
        
        componentInputs.forEach(requiredInput => {
            if (!providedInputs.has(requiredInput)) {
                throw new Error(`O componente filho requer o input '${requiredInput}', mas não foi fornecido pelo componente pai.`);
            }
        });
    }

    static validateIfOutputsAreCorrectlyInstantiated(componentRef: ComponentRef<any>, userOutputs?: UserOutputs) {
        const outputs = (componentRef as any)._tNode.outputs;
        
        if (!userOutputs && !outputs) return;

        if (userOutputs && !outputs) {
            throw new Error("Outputs foram fornecidos, mas o componente filho não requer inputs.");
        }

        if (!userOutputs && outputs) {
            throw new Error("O componente filho requer outputs, mas nenhum foi fornecido pelo componente pai.");
        }

        const componentOutputs = Object.keys(outputs);
        const {instance} = componentRef;
        
        const providedOutputs = new Set<string>(Object.keys(userOutputs!));
        
        componentOutputs.forEach(requiredOutput => {
            if (!providedOutputs.has(requiredOutput)) {
                throw new Error(`O componente filho requer o output '${requiredOutput}', mas não foi fornecido pelo componente pai.`);
            }
            if (!(instance[requiredOutput] instanceof EventEmitter)) throw new Error(`O componente possui o output ${requiredOutput}, etretanto, ele não está instanciado como um EventEmmiter do angular.`);
        });
    }
    
    static validateIfIsComponentImplemented(component: Type<any> | undefined, state: string) {
        if (component === undefined) throw Error(`Component is not defined for the state ${state}`);
    }
}