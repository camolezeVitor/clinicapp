import { EnderecoDTO } from "./endereco"

export type PessoaDTO = {
    id: string,
    nome: string,
    rg: string,
    cpf: string,
    dataNascimento: Date,
    dataCadastro: Date,
    foto: Blob,
    telefoneCelular: string,
    endereco: EnderecoDTO
}