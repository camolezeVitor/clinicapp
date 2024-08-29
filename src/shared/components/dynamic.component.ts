import { inject, NgZone, Type } from "@angular/core";
import { DynamicComponentProtocol } from "@mapping/protocols";
import { DynamicComponentCreationService } from "@services";

export class DynamicComponent implements DynamicComponentProtocol {
    dynamicComponent__: Type<any> | null | undefined;
    dynamicService__: DynamicComponentCreationService = inject(DynamicComponentCreationService);
    ngZone: NgZone = inject(NgZone);

    constructor(
        defaultComponent?: Type<any>
    ) {
        this.dynamicComponent__ = defaultComponent;

        this.dynamicService__.observeChanges(this).subscribe(component => {
            this.ngZone.run(() => {
                this.dynamicComponent__ = component;
            });
        });
    }
}