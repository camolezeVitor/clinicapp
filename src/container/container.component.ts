import { Component } from "@angular/core";
import { ScreenState } from "@enums/states";
import { DTCLContainerComponent } from "./views/desktop/dt-container.component";
import { MBCLContainerComponent } from "./views/mobile/mb-container.component";
import { DynamicComponentConfig } from "src/shared/mapping/protocols/dynamic.protocol";
import { ScreenService } from "src/shared/services/screen.service";

const ContainerConfig: DynamicComponentConfig<ScreenState> = {
  handler: ScreenService,
  templates: [
    {component: DTCLContainerComponent, condition: "DESKTOP"},
    {component: MBCLContainerComponent, condition: "MOBILE"},
  ]
};

@Component({
  selector: "cl-container",
  template: `
    <ng-template [dynamic]="config"/>
  `,
})
export class CLContainerComponent {
  config = ContainerConfig;
}