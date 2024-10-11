import { Injectable } from "@angular/core";
import { JwtToken } from "src/shared/utils/dependencies";
import { JwtTokenImpl } from "private/security/token-manager";
import { TokenState } from "src/shared/utils/models/enums/token-state";

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

    getToken = (): string | null => {
        return this.jwtToken.getToken();
    };
}