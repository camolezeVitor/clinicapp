import { TokenState } from "src/shared/enums/states/token-state";

/**
 * Interface utilizada para padronizar outras classes que devem 
 * manipular uma Token
 */
export interface JwtToken {
    storeToken: (token: string) => void;
    clearToken: () => void;
    verifyTokenState: () => TokenState;
}