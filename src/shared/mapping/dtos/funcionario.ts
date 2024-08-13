import { PessoaDTO } from "./pessoa"
import { UsuarioDTO } from "./usuario"

export type FuncionarioDTO = {
    id: string,
    cargo: string,
    formacao: string,
    salario: number,
    pessoa: PessoaDTO,
    usuario: UsuarioDTO,
}