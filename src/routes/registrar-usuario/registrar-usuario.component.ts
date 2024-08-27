import { Component, Inject, OnInit, ViewContainerRef } from "@angular/core";
import { RegistrarUsuarioProtocol } from "./registrar-usuario.protocol";
import { ApplicationStateService } from "src/shared/services/application-state.service";

@Component({
    selector: "cl-registrar-usuario-component",
    template: "<ng-content/>"
})
export class CLRegistrarUsuarioComponent implements 
    RegistrarUsuarioProtocol, OnInit {

    implementacaoComponent: ViewContainerRef = Inject(ViewContainerRef);
    applicationStateService: ApplicationStateService = Inject(ApplicationStateService);

    instanciarImplementacao() {
    };

    enviarFormularioDeCadastro() {
    };

    validarFormularioDeCadastro(){
    };

    ngOnInit(): void {
        this.instanciarImplementacao();
    }
}