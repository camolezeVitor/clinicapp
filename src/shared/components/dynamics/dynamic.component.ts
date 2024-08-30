import { inject, NgZone, Type } from "@angular/core";
import { DynamicComponentProtocol } from "@mapping/protocols";
import { DynamicComponentCreationService } from "@services";
import { BehaviorSubject } from "rxjs";


export type Template<T> = {
    component: Function,
    condition: T;
};

interface DynamicHandler<T> {

};

type DynamicComponentConfig<T> = {
    templates: Template<T>,
    handler: DynamicHandler<T> | BehaviorSubject<T>,
    defaultComponent?: Type<any>,
    loadingComponent?: Type<any>
}

export abstract class DynamicComponent<T> implements DynamicComponentProtocol {
    dynamicComponent__: Type<any> | undefined;
    dynamicService__: DynamicComponentCreationService = inject(DynamicComponentCreationService);
    ngZone: NgZone = inject(NgZone);

    constructor(
        config: DynamicComponentConfig<T>
    ) {
        this.dynamicComponent__ = config['defaultComponent']!;

        this.dynamicService__.observeChanges(this).subscribe(component => {
            this.ngZone.run(() => {
                this.dynamicComponent__ = component;
            });
        });
    }
};