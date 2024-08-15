import { Injectable, OnInit } from "@angular/core";
import { Codec } from "@mapping/dependencies";

@Injectable({
    providedIn: "root"
})
export class AdvancedEncryptionSystemService implements OnInit {    

  private codec: Codec | null = null;

  ngOnInit(): void {};

  public encryptValue(value: JSON) {};
}