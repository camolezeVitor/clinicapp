import { Funcionario } from "@mapping/core"
import { PessoaDTO } from "./pessoa"
import { UsuarioDTO } from "./usuario"

export type FuncionarioDTO = {
    pessoa?: PessoaDTO,
    usuario?: UsuarioDTO,
} & Funcionario;