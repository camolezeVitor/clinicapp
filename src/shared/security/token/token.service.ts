import { Injectable } from "@angular/core";
import { JwtToken } from "@mapping/dependencies";
import { JwtTokenImpl } from "private/security/token-manager";
import { TokenState } from "src/shared/enums/states/token-state";

/**
 * @author camolezeVitor
 * @description
 * Essa classe é utilizada para a validação de tokens
 */
@Injectable({
    providedIn: "root"
})
export class TokenService implements JwtToken {

    private jwtToken: JwtToken = new JwtTokenImpl();

    isTokenValid = (token: string): Promise<Boolean> => {
        return this.jwtToken.isTokenValid(token);
    };

    storeToken = (token: string) => {
        this.jwtToken.storeToken(token);
    };

    clearToken = () => {
        this.jwtToken.clearToken();
    };

    verifyTokenState = (): Promise<TokenState> => {
        return this.jwtToken.verifyTokenState();
    };

}