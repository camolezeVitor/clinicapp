import { Component } from "@angular/core";
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
    <ng-template [dynamic]="config"
        [outputs]="{
            handle$enviarFormularioDeCadastro: enviarFormularioDeCadastro,
            handle$validarFormularioDeCadastro: validarFormularioDeCadastro
        }"
    />
    `
})
export class CLRegistrarUsuarioComponent implements RegistrarUsuarioProtocol, DynamicFather<ScreenState> {
    config = CLRegistrarUsuariosConfig;

    constructor() {}

    enviarFormularioDeCadastro(form?: string) {
        
    };

    validarFormularioDeCadastro(form?: string) {
        
    };
}