import { UsuarioDTO } from "../dtos/usuario";
import { ConfiguracoesDeUsuario } from "./configs-usuario"

export class Usuario {
    login: string;
    nomeUsuario: string;
    configuracoesDoUsuario: ConfiguracoesDeUsuario;

    constructor(usuarioDto: UsuarioDTO) {
        this.login = usuarioDto.login;
        this.nomeUsuario = usuarioDto.nomeUsuario;
        this.configuracoesDoUsuario = usuarioDto.configuracoesDoUsuario;
    }
}