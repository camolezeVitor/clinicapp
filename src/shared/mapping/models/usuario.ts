import { Usuario } from "@mapping/core";
import { UsuarioDTO } from "@mapping/dtos";
import { ConfiguracoesDoUsuarioImpl } from "@mapping/models";

export class UsuarioImpl implements Usuario {
    
    login: string;
    nomeUsuario: string;
    configuracoesDoUsuario?: ConfiguracoesDoUsuarioImpl;

    constructor(usuarioDto: UsuarioDTO) {

        //Parâmetros opcionais
        const { configuracoesDoUsuario } = usuarioDto;

        this.login = usuarioDto.login;
        this.nomeUsuario = usuarioDto.nomeUsuario;
        this.configuracoesDoUsuario = configuracoesDoUsuario ? new ConfiguracoesDoUsuarioImpl(configuracoesDoUsuario) : undefined;
    }
}