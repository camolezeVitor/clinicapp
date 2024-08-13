export type ConfiguracoesDeUsuarioDTO = {
    darkMode: boolean,
    sideBarInteligente: boolean,
    pressetDefinido: number | null,
    corDeIdentificacao: string,
    estiloDeAgendaPadrao: string,
    configuracaoInicialDoLayoutPorIds: Array<string>;
}