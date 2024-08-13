import { ConfiguracoesDeUsuarioDTO } from "./configs-usuario"

export type UsuarioDTO = {
    login: string,
    nomeUsuario: string,
    configuracoesDoUsuario: ConfiguracoesDeUsuarioDTO,
}