export interface Pessoa {
    id: string,
    nome: string,
    rg: string,
    cpf: string,
    dataNascimento: Date,
    dataCadastro: Date,
    foto?: Blob,
    telefoneCelular: string,
}