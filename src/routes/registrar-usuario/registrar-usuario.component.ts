import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { RegistrarUsuarioProtocol } from "./registrar-usuario.protocol";
import { ScreenState } from "@enums/states";
import { ScreenService } from "src/shared/services/screen.service";
import { DTCLRegistrarUsuarioComponent } from "./views/desktop/dt-registrar-usuario.component";
import { MBCLRegistrarUsuarioComponent } from "./views/mobile/mb-registrar-usuario.component";
import { DynamicComponentConfig, DynamicFather } from "src/shared/mapping/protocols/dynamic.protocol";

const CLRegistrarUsuariosConfig: DynamicComponentConfig<ScreenState> = {
    handler: ScreenService,
    templates: [
        { component: DTCLRegistrarUsuarioComponent, condition: "DESKTOP" },
        { component: MBCLRegistrarUsuarioComponent, condition: "MOBILE" },
    ],
}

@Component({
    selector: "cl-registrar-usuario-component",
    template: `
    <ng-template [Dynamic]="config"
        [outputs]="{
            handle$enviarFormularioDeCadastro: enviarFormularioDeCadastro,
            handle$validarFormularioDeCadastro: validarFormularioDeCadastro
        }"
    />
    `
})
export class CLRegistrarUsuarioComponent implements RegistrarUsuarioProtocol, DynamicFather<ScreenState> {
    config = CLRegistrarUsuariosConfig;
    valor: string = "Alguma coisa aleatória";

    constructor() {
        setTimeout(() => {
            
        }, 5000);
    }

    enviarFormularioDeCadastro(form?: string) {
        console.log(form);
    };

    validarFormularioDeCadastro(){};
}