import { TokenState } from "src/shared/enums/states/token-state";

/**
 * Interface utilizada para padronizar outras classes que devem 
 * manipular uma Token
 */
export interface JwtToken {
    isTokenValid: (token: string) => Promise<Boolean>;
    storeToken: (token: string) => void;
    clearToken: () => void;
    verifyTokenState: () => Promise<TokenState>;
    getToken: () => string | null;
}