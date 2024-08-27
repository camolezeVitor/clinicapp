import { Component, } from "@angular/core";
import { RegistrarUsuarioProtocol } from "./registrar-usuario.protocol";

@Component({
    selector: "cl-registrar-usuario-component",
})
export class CLRegistrarUsuarioComponent 
    implements RegistrarUsuarioProtocol {
        
    constructor() {}

    enviarFormularioDeCadastro() {
    };

    validarFormularioDeCadastro(){
    };
}