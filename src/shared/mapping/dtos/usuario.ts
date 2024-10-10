import { Usuario } from "@mapping/core"
import { ConfiguracoesDoUsuarioDTO, createConfiguracoesDoUsuarioDTOFromEntity } from "./configs-usuario"
import { UsuarioImpl } from "@mapping/entities";

export type UsuarioDTO = {
    configuracoesDoUsuario?: ConfiguracoesDoUsuarioDTO,
} & Usuario;

export function createUsuarioDTOFromEntity(usuario: UsuarioImpl): UsuarioDTO {
    return {
        login: usuario.login,
        nomeUsuario: usuario.nomeUsuario,
        configuracoesDoUsuario: usuario.configuracoesDoUsuario ? createConfiguracoesDoUsuarioDTOFromEntity(usuario.configuracoesDoUsuario) : undefined
    }
}