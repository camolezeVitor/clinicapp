import { ConfiguracoesDoUsuarioDTO } from "@mapping/dtos";
import { ConfiguracoesDoUsuarioImpl } from "@mapping/models";

export class ConfiguracoesDoUsuarioAdapter {
    static fromDtoToModel(configuracoesDoUsuarioDto: ConfiguracoesDoUsuarioDTO): ConfiguracoesDoUsuarioImpl {
        return new ConfiguracoesDoUsuarioImpl(configuracoesDoUsuarioDto);
    }
}