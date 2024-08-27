import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "register",
    loadChildren: () => import("../routes/registrar-usuario/registrar-usuario.module")
      .then(mod => mod.CLRegistrarUsuarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
