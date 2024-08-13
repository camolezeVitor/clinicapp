import { Injectable, OnInit } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class BoxService implements OnInit {

    private valueList: Map<string, any> | undefined = new Map<string, any>();

    //Access Methods ============================================|
    public saveValue(boxUuid: string, value: any) {
        this.valueList!.set(boxUuid, value);
    }

    public removeValue(boxUuid: string) {
        this.valueList!.delete(boxUuid);
    }

    //Validation Methods ========================================|
    private validateInitialStateOfTheBoxService() {
        this.validateIfValueMapIsInstantiated();
    }

    private validateIfValueMapIsInstantiated() {
        if (!this.valueList) {
            this.valueList = new Map<string, any>();
        }
    }

    ngOnInit(): void {
        this.validateInitialStateOfTheBoxService();
    }
}