import { ConfiguracoesDoUsuario } from "@mapping/core";
import { ConfiguracoesDoUsuarioImpl } from "@mapping/entities";

export type ConfiguracoesDoUsuarioDTO = ConfiguracoesDoUsuario;

export function createConfiguracoesDoUsuarioDTOFromEntity(configuracoesDoUsuario: ConfiguracoesDoUsuarioImpl): ConfiguracoesDoUsuarioDTO {
    return {
        configuracaoInicialDoLayoutPorIds: configuracoesDoUsuario.configuracaoInicialDoLayoutPorIds,
        corDeIdentificacao: configuracoesDoUsuario.corDeIdentificacao,
        darkMode: configuracoesDoUsuario.darkMode,
        estiloDeAgendaPadrao: configuracoesDoUsuario.estiloDeAgendaPadrao,
        pressetDefinido: configuracoesDoUsuario.pressetDefinido,
        sideBarInteligente: configuracoesDoUsuario.sideBarInteligente
    }
}