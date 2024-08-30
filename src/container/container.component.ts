import { Component, inject } from "@angular/core";
import { DynamicComponent } from "@components";
import { ScreenState } from "@enums/states";
import { ScreenService } from "src/shared/services/screen.service";
import { DTCLContainerComponent } from "./views/desktop/dt-container.component";
import { MBCLContainerComponent } from "./views/mobile/mb-container.component";

@Component({
  selector: "cl-container",
  template: "a"
})
export class CLContainerComponent extends DynamicComponent<ScreenState> {

  constructor() {
    super({
      handler: ScreenService,
      templates: [
        {component: DTCLContainerComponent, condition: "DESKTOP"},
        {component: MBCLContainerComponent, condition: "MOBILE"},
      ]
    });
  };

}