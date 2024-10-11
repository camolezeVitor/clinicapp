import { Injectable } from "@angular/core";
import { Codec } from "src/shared/utils/dependencies";
import { CodecImpl, KeyFactory } from "@private";

/**
 * @author camolezeVitor
 * @description
 * Classe utilizada para a criação de dados encriptados utilizados
 * nessa aplicação!
 */
@Injectable({
    providedIn: "root"
})
export class AdvancedEncryptionSystemService implements Codec {

  private codec: Codec = new CodecImpl();

  private getKey() {
    return KeyFactory.create();
  }

  encrypt(value: string): string {
    return this.codec.encrypt(value, this.getKey());
  };

  decrypt (value: string) {
    return this.codec.decrypt(value, this.getKey());
  };    
}