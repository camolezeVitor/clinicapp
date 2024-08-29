import { Component } from "@angular/core";
import { Dynamic } from "@decorators";
import { ScreenState } from "@enums/states";
import { windowChangeTest$ } from "@services";
import { MBCLContainerComponent } from "./views/mobile/mb-container.component";
import { DTCLContainerComponent } from "./views/desktop/dt-container.component";
import { DynamicComponent } from "@components";
import { DynamicTemplate } from "@constants";

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