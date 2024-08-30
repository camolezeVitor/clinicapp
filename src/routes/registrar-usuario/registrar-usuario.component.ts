import { Component, } from "@angular/core";
import { RegistrarUsuarioProtocol } from "./registrar-usuario.protocol";
import { DynamicComponent } from "@components";
import { ScreenState } from "@enums/states";
import { ScreenService } from "src/shared/services/screen.service";
import { Template } from "@mapping/types";
import { DTCLRegistrarUsuarioComponent } from "./views/desktop/dt-registrar-usuario.component";
import { MBCLRegistrarUsuarioComponent } from "./views/mobile/mb-registrar-usuario.component";
import { DynamicTemplate } from "@constants";

const CLRegistrarUsuariosTemplates: Array<Template<ScreenState>> = [
    { component: DTCLRegistrarUsuarioComponent, condition: "DESKTOP" },
    { component: MBCLRegistrarUsuarioComponent, condition: "MOBILE" },
]

@Component({
    selector: "cl-registrar-usuario-component",
    template: DynamicTemplate
})
export class CLRegistrarUsuarioComponent extends DynamicComponent<ScreenState>
    implements RegistrarUsuarioProtocol {
        
    constructor() {
        super({
            handler: ScreenService,
            templates: CLRegistrarUsuariosTemplates
        })
    }

    enviarFormularioDeCadastro() {
    };

    validarFormularioDeCadastro(){
    };
}