import { NgModule } from "@angular/core";
import { CLRegistrarUsuarioComponent } from "./registrar-usuario.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        RouterModule.forChild([{path:"", component: CLRegistrarUsuarioComponent}])
    ],
    declarations: [
        CLRegistrarUsuarioComponent
    ],
    exports: [
        CLRegistrarUsuarioComponent
    ],
})
export class CLRegistrarUsuarioModule {}