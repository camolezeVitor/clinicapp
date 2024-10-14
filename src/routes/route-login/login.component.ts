import { Component } from "@angular/core";
import { ScreenState } from "@utils/enums";
import { DynamicComponentConfig } from "@utils/protocols";
import { ScreenService } from "@utils/services";
import { DesktopLoginViewComponent } from "./views/desktop/dt-login-view.component";
import { MobileLoginViewComponent } from "./views/mobile/mb-login-view.component";

const LoginViewWrapperConfig: DynamicComponentConfig<ScreenState> = {
  handler: ScreenService,
  templates: [
    {component: DesktopLoginViewComponent, condition: "DESKTOP"},
    {component: MobileLoginViewComponent, condition: "MOBILE"},
  ]
};

@Component({
  selector: "cl-login-view",
  template: `
  <ng-template [dynamic]="config" />
  `
})
export class LoginViewWrapperComponent {
  config = LoginViewWrapperConfig;
}