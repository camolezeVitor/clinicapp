import { ConfiguracoesDeUsuarioDTO } from "../dtos/configs-usuario"

export class ConfiguracoesDeUsuario {
    
    darkMode: boolean;
    sideBarInteligente: boolean;
    pressetDefinido: number | null;
    corDeIdentificacao: string;
    estiloDeAgendaPadrao: string;
    configuracaoInicialDoLayoutPorIds: Array<string>;

    constructor (configuracoesDTO: ConfiguracoesDeUsuarioDTO) {
        this.darkMode = configuracoesDTO.darkMode;
        this.sideBarInteligente = configuracoesDTO.sideBarInteligente;
        this.pressetDefinido = configuracoesDTO.pressetDefinido;
        this.corDeIdentificacao = configuracoesDTO.corDeIdentificacao;
        this.estiloDeAgendaPadrao = configuracoesDTO.estiloDeAgendaPadrao;
        this.configuracaoInicialDoLayoutPorIds = configuracoesDTO.configuracaoInicialDoLayoutPorIds;
    }
}