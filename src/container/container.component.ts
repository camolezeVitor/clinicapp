import { Component } from "@angular/core";
import { Dynamic } from "@decorators";
import { ScreenState } from "@enums/states";
import { windowChangeTest$ } from "@services";
import { MBCLContainerComponent } from "./views/mobile/mb-container.component";
import { DTCLContainerComponent } from "./views/desktop/dt-container.component";
import { DynamicTemplate } from "src/shared/decorators/dynamic/dynamic.types";
import { DynamicComponent } from "src/shared/components/dynamic.component";

@Component({
  selector: "cl-container",
  template: DynamicTemplate
})
@Dynamic<ScreenState>({
  parameter: windowChangeTest$,
  componentTemplates: [
    { component: MBCLContainerComponent, condition: ScreenState.MOBILE },
    { component: DTCLContainerComponent, condition: ScreenState.DESKTOP }
  ]
})
export class CLContainerComponent extends DynamicComponent {

  constructor() {
    super();
  }

}