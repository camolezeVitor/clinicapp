import { Usuario } from "@mapping/core"
import { ConfiguracoesDeUsuarioDTO } from "./configs-usuario"

export type UsuarioDTO = {
    configuracoesDoUsuario: ConfiguracoesDeUsuarioDTO,
} & Usuario;