import { Component, } from "@angular/core";
import { RegistrarUsuarioProtocol } from "./registrar-usuario.protocol";

@Component({
    selector: "cl-registrar-usuario-component",
    template: "a"
})
export class CLRegistrarUsuarioComponent 
    implements RegistrarUsuarioProtocol {
        
    constructor() {}

    enviarFormularioDeCadastro() {
    };

    validarFormularioDeCadastro(){
    };
}