import { Component, EventEmitter, Input, Output, output, OutputEmitterRef } from "@angular/core";
import { DynamicChild } from "@mapping/types";
import { RegistrarUsuarioProtocol } from "../../registrar-usuario.protocol";

@Component({
    selector: "mb-cl-registrar-usuario",
    templateUrl: "mb-registrar-usuario.component.html",
    styleUrl: "mb-registrar-usuario.component.css",
})
export class MBCLRegistrarUsuarioComponent implements DynamicChild<RegistrarUsuarioProtocol> {
    
    @Output() handle$enviarFormularioDeCadastro: EventEmitter<any> = new EventEmitter<any>();
    @Output() handle$validarFormularioDeCadastro: EventEmitter<any> = new EventEmitter<any>();
    
    enviarFormularioDeCadastro() {
        this.handle$enviarFormularioDeCadastro.emit("Texto gerado pelo paulo romano");
    };

    validarFormularioDeCadastro() {

    };

}