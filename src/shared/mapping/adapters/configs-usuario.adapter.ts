import { ConfiguracoesDoUsuarioDTO, createConfiguracoesDoUsuarioDTOFromEntity } from "@mapping/dtos";
import { ConfiguracoesDoUsuarioImpl } from "src/shared/mapping/entities";

export class ConfiguracoesDoUsuarioAdapter {
    public static fromDTOToEntity(configuracoesDoUsuarioDto: ConfiguracoesDoUsuarioDTO): ConfiguracoesDoUsuarioImpl {
        return new ConfiguracoesDoUsuarioImpl(configuracoesDoUsuarioDto);
    }
    public static fromEntityToDTO(configuracoesDoUsuarioEntity: ConfiguracoesDoUsuarioImpl): ConfiguracoesDoUsuarioDTO {
        return createConfiguracoesDoUsuarioDTOFromEntity(configuracoesDoUsuarioEntity);
    }
}