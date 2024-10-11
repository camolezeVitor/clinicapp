/**
 * Interface utilizada para padronizar a criação de uma classe
 * utilitária de criptografia.
 */
export interface Codec {
    encrypt: (value: string, key: string) => string;
    decrypt: (value: string, key: string) => any | unknown;
}