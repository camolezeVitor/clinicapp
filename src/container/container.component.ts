import { Component } from "@angular/core";
import { DynamicComponent } from "@components";
import { ScreenState } from "@enums/states";
import { ScreenService } from "src/shared/services/screen.service";
import { DTCLContainerComponent } from "./views/desktop/dt-container.component";
import { MBCLContainerComponent } from "./views/mobile/mb-container.component";
import { DynamicTemplate } from "@constants";
import { Template } from "@mapping/types";

const ContainerTemplates: Array<Template<ScreenState>> = [
  {component: DTCLContainerComponent, condition: "DESKTOP"},
  {component: MBCLContainerComponent, condition: "MOBILE"},
]

@Component({
  selector: "cl-container",
  template: DynamicTemplate
})
export class CLContainerComponent extends DynamicComponent<ScreenState> {

  constructor() {
    super({
      handler: ScreenService,
      templates: ContainerTemplates,
    });
  };

}