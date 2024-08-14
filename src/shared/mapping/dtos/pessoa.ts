import { Pessoa } from "@mapping/core"
import { EnderecoDTO } from "./endereco"

export type PessoaDTO = {
    endereco?: EnderecoDTO
} & Pessoa