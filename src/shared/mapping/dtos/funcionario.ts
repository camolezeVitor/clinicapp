import { Funcionario } from "@mapping/core"
import { createPessoaDTOFromEntity, PessoaDTO } from "./pessoa"
import { createUsuarioDTOFromEntity, UsuarioDTO } from "./usuario"
import { FuncionarioImpl } from "@mapping/entities";

export type FuncionarioDTO = {
    pessoa?: PessoaDTO,
    usuario?: UsuarioDTO,
} & Funcionario;

export function createFuncionarioDTOFromEntity(funcionario: FuncionarioImpl): FuncionarioDTO {
    return {
        cargo: funcionario.cargo,
        formacao: funcionario.formacao,
        id: funcionario.id,
        salario: funcionario.salario,
        pessoa: funcionario.pessoa ? createPessoaDTOFromEntity(funcionario.pessoa) : undefined,
        usuario: funcionario.usuario ? createUsuarioDTOFromEntity(funcionario.usuario) : undefined
    }
}