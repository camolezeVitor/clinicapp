import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DynamicDirective } from "@utils/directives";
import { LoginViewWrapperComponent } from "./login.component";
import { DesktopLoginViewComponent } from "./views/desktop/dt-login-view.component";
import { MobileLoginViewComponent } from "./views/mobile/mb-login-view.component";
import { HlmInputDirective } from "@spartan-ng/ui-input-helm";
import { HlmLabelDirective } from "@spartan-ng/ui-label-helm";
import { LoginBaseComponent } from "./views/common/login-base/login-base.component";

@NgModule({
    declarations: [
        LoginViewWrapperComponent,
        DesktopLoginViewComponent,
        MobileLoginViewComponent,

        //COMMON
        LoginBaseComponent
    ],
    imports: [
        RouterModule.forChild([{path: "", component: LoginViewWrapperComponent}]),
        CommonModule,
        DynamicDirective,

        //VISUAL
        HlmInputDirective,
        HlmLabelDirective
    ],
    providers: [
        
    ]
})
export class LoginViewModule {

}