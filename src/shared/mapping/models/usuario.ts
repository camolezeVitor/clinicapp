import { UsuarioDTO } from "../dtos/usuario";
import { ConfiguracoesDeUsuarioImpl } from "./configs-usuario"

export class UsuarioImpl {
    
    login: string;
    nomeUsuario: string;
    configuracoesDoUsuario: ConfiguracoesDeUsuarioImpl;

    constructor(usuarioDto: UsuarioDTO) {
        this.login = usuarioDto.login;
        this.nomeUsuario = usuarioDto.nomeUsuario;
        this.configuracoesDoUsuario = usuarioDto.configuracoesDoUsuario;
    }
}