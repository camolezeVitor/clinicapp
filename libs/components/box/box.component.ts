import { Component, inject, input, InputSignal, OnInit } from "@angular/core";
import { BoxService } from "../../services/box/box.service";

@Component({
    selector: "cna-box",
    template: "<ng-content>"
})
export class BoxComponent implements OnInit {

    public inputValue: InputSignal<string | undefined> = input<string>();
    public boxUuid: string = crypto.randomUUID();

    //Dependency Injections
    private boxService: BoxService = inject(BoxService);

    //Access Methods in BoxService
    private saveBoxValueIntoService(boxUuid: string, value: any) {
        this.boxService.saveValue(boxUuid, value);
    }

    ngOnInit(): void {
        
    }
}