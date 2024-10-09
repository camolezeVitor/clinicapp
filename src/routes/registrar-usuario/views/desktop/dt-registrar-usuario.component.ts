import { Component, EventEmitter, Output } from "@angular/core";
import { DynamicChild } from "@mapping/types";
import { RegistrarUsuarioProtocol } from "../../registrar-usuario.protocol";

@Component({
    selector: "dt-cl-registrar-usuario",
    templateUrl: "dt-registrar-usuario.component.html",
    styleUrl: "dt-registrar-usuario.component.css",
})
export class DTCLRegistrarUsuarioComponent implements DynamicChild<RegistrarUsuarioProtocol> {

    @Output() handle$enviarFormularioDeCadastro: EventEmitter<any> = new EventEmitter<any>();
    @Output() handle$validarFormularioDeCadastro: EventEmitter<any> = new EventEmitter<any>();
    
    enviarFormularioDeCadastro() {
        this.handle$enviarFormularioDeCadastro.emit("Teste :)")
    };

    validarFormularioDeCadastro() {};
    
}