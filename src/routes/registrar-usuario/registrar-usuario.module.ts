import { NgModule } from "@angular/core";
import { CLRegistrarUsuarioComponent } from "./registrar-usuario.component";
import { RouterModule } from "@angular/router";
import { DTCLRegistrarUsuarioComponent } from "./views/desktop/dt-registrar-usuario.component";
import { MBCLRegistrarUsuarioComponent } from "./views/mobile/mb-registrar-usuario.component";
import { CommonModule } from "@angular/common";
import { Dynamic } from "@directives";

@NgModule({
    imports: [
        RouterModule.forChild([{path:"", component: CLRegistrarUsuarioComponent}]),
        CommonModule,
        Dynamic
    ],
    declarations: [
        CLRegistrarUsuarioComponent,
        DTCLRegistrarUsuarioComponent,
        MBCLRegistrarUsuarioComponent
    ],
    exports: [
        CLRegistrarUsuarioComponent
    ],
})
export class CLRegistrarUsuarioModule {}