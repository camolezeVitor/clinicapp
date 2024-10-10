import { ConfiguracoesDoUsuarioDTO } from "@mapping/dtos";
import { ConfiguracoesDoUsuarioImpl } from "src/shared/mapping/entities";

export class ConfiguracoesDoUsuarioAdapter {
    static fromDtoToEntity(configuracoesDoUsuarioDto: ConfiguracoesDoUsuarioDTO): ConfiguracoesDoUsuarioImpl {
        return new ConfiguracoesDoUsuarioImpl(configuracoesDoUsuarioDto);
    }
}