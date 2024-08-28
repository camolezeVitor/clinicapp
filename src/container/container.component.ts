import { Component, inject, Type } from "@angular/core";
import { Dynamic } from "@decorators";
import { ScreenState } from "@enums/states";
import { DynamicComponentCreationService, windowChangeTest$ } from "@services";
import { MBCLContainerComponent } from "./views/mobile/mb-container.component";
import { DynamicComponentProtocol } from "@mapping/protocols";
import { DTCLContainerComponent } from "./views/desktop/dt-container.component";
import { NgZone } from "@angular/core";

const DynamicTemplate = `@if(dynamicComponent__){<ng-component-outlet [ngComponentOutlet]="dynamicComponent__"/>}`;

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
export class CLContainerComponent implements DynamicComponentProtocol {
  dynamicComponent__: Type<any> | null | undefined = DTCLContainerComponent;
  dynamicService__: DynamicComponentCreationService = inject(DynamicComponentCreationService);
  private ngZone: NgZone = inject(NgZone);

  constructor() {
    this.dynamicService__.observeChanges(this).subscribe(component => {
      this.ngZone.run(() => {
        this.dynamicComponent__ = component;
      });
    });
  }
}