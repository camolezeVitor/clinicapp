import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DynamicDirective } from "@utils/directives";
import { LoginViewWrapperComponent } from "./login.component";
import { DesktopLoginViewComponent } from "./views/desktop/dt-login-view.component";
import { MobileLoginViewComponent } from "./views/mobile/mb-login-view.component";

@NgModule({
    declarations: [
        LoginViewWrapperComponent,
        DesktopLoginViewComponent,
        MobileLoginViewComponent
    ],
    imports: [
        RouterModule.forChild([{path: "", component: LoginViewWrapperComponent}]),
        CommonModule,
        DynamicDirective
    ],
    providers: [
        
    ]
})
export class LoginViewModule {

}