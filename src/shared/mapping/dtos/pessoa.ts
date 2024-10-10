import { Pessoa } from "@mapping/core"
import { createEnderecoDTOFromEntity, EnderecoDTO } from "./endereco"
import { PessoaImpl } from "@mapping/entities"

export type PessoaDTO = {
    endereco?: EnderecoDTO
} & Pessoa

export function createPessoaDTOFromEntity(pessoa: PessoaImpl): PessoaDTO {
    return {
        cpf: pessoa.cpf,
        dataCadastro: pessoa.dataCadastro,
        dataNascimento: pessoa.dataNascimento,
        id: pessoa.id,
        nome: pessoa.nome,
        rg: pessoa.rg,
        telefoneCelular: pessoa.telefoneCelular,
        endereco: pessoa.endereco ? createEnderecoDTOFromEntity(pessoa.endereco) : undefined,
        foto: pessoa.foto
    }
}