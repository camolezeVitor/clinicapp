import { Injectable } from "@angular/core";
import { SCREEN_CONFIG } from "@configs";
import { ScreenState } from "src/shared/utils/models/enums";
import { DynamicHandlerProtocol } from "src/shared/utils/models/protocols";
import { BehaviorSubject, fromEvent, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ScreenService implements DynamicHandlerProtocol<ScreenState> {

    actualValidationValue!: ScreenState;
    templateSubject$: BehaviorSubject<ScreenState> = new BehaviorSubject<any>(null);

    constructor() {
        if (typeof window !== 'undefined') {
            this.initialEmmit();
            this.validateChangeAndEmitOutput();
        }
    }
    
    validateChangeAndEmitOutput() :void | Observable<ScreenState> {
        fromEvent(window, 'resize').subscribe(() => 
            this.checkIfThereIsNeedForChangingThenEmmitChange(this.getScreenType())
        )
    };

    initialEmmit() {
        this.checkIfThereIsNeedForChangingThenEmmitChange(this.getScreenType());
    }

    private checkIfThereIsNeedForChangingThenEmmitChange(state: ScreenState) {
        if (this.actualValidationValue != state) {
            this.actualValidationValue = state; 
            this.templateSubject$.next(state);
        }
    }

    private getScreenType(): ScreenState {
        return window.innerWidth > SCREEN_CONFIG.mobileWidth ? "DESKTOP" : "MOBILE";
    }
    
}