import { NgModule } from "@angular/core";
import { CLContainerComponent } from "./container.component";
import { CommonModule } from "@angular/common";
import { DTCLContainerComponent } from "./views/desktop/dt-container.component";
import { MBCLContainerComponent } from "./views/mobile/mb-container.component";
import { ScreenService } from "src/shared/utils/services/screen.service";
import { DynamicDirective } from "src/shared/utils/directives";

@NgModule({
    declarations: [
        CLContainerComponent,
        DTCLContainerComponent,
        MBCLContainerComponent,
    ],
    imports: [
        CommonModule,
        DynamicDirective
    ],
    exports: [
        CLContainerComponent
    ],
    providers: [
        ScreenService
    ]
})
export class CLContainerModule {}