import { ViewContainerRef } from "@angular/core";

export interface RegistrarUsuarioProtocol {

    implementacaoComponent: ViewContainerRef;

    instanciarImplementacao: () => void;

    enviarFormularioDeCadastro: () => unknown;
    
    validarFormularioDeCadastro: () => unknown;

}