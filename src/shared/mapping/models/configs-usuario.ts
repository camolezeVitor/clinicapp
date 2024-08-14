import { ConfiguracoesDoUsuario } from "@mapping/core";
import { ConfiguracoesDoUsuarioDTO } from "@mapping/dtos";

export class ConfiguracoesDoUsuarioImpl implements ConfiguracoesDoUsuario {
    
    darkMode: boolean;
    sideBarInteligente: boolean;
    pressetDefinido: number | null;
    corDeIdentificacao: string;
    estiloDeAgendaPadrao: string;
    configuracaoInicialDoLayoutPorIds: Array<string>;

    constructor (configuracoesDTO: ConfiguracoesDoUsuarioDTO) {
        this.darkMode = configuracoesDTO.darkMode;
        this.sideBarInteligente = configuracoesDTO.sideBarInteligente;
        this.pressetDefinido = configuracoesDTO.pressetDefinido;
        this.corDeIdentificacao = configuracoesDTO.corDeIdentificacao;
        this.estiloDeAgendaPadrao = configuracoesDTO.estiloDeAgendaPadrao;
        this.configuracaoInicialDoLayoutPorIds = configuracoesDTO.configuracaoInicialDoLayoutPorIds;
    }
}