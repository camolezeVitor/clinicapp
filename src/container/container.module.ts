import { NgModule } from "@angular/core";
import { CLContainerComponent } from "./container.component";
import { CommonModule } from "@angular/common";
import { DTCLContainerComponent } from "./views/desktop/dt-container.component";
import { MBCLContainerComponent } from "./views/mobile/mb-container.component";

@NgModule({
    declarations: [
        CLContainerComponent,
        DTCLContainerComponent,
        MBCLContainerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CLContainerComponent
    ]
})
export class CLContainerModule {}