import { Usuario } from "@mapping/core"
import { ConfiguracoesDoUsuarioDTO } from "./configs-usuario"

export type UsuarioDTO = {
    configuracoesDoUsuario?: ConfiguracoesDoUsuarioDTO,
} & Usuario;