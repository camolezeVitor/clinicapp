import { NgModule } from "@angular/core";
import { CLRegistrarUsuarioComponent } from "./registrar-usuario.component";
import { RouterModule } from "@angular/router";
import { DTCLRegistrarUsuarioComponent } from "./views/desktop/dt-registrar-usuario.component";
import { MBCLRegistrarUsuarioComponent } from "./views/mobile/mb-registrar-usuario.component";
import { CommonModule } from "@angular/common";
import { DynamicDirective } from "src/shared/utils/directives";

@NgModule({
    imports: [
        RouterModule.forChild([{path:"", component: CLRegistrarUsuarioComponent}]),
        CommonModule,
        DynamicDirective
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