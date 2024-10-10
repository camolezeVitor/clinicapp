import { Servico } from "@mapping/core";
import { ServicoImpl } from "@mapping/entities";

export type ServicoDTO = Servico;

export function createServicoDTOFromEntity(servico: ServicoImpl): ServicoDTO {
    return {
        descricao: servico.descricao,
        gastos: servico.gastos,
        id: servico.id,
        tipoServico: servico.tipoServico,
        valor: servico.valor
    }
}