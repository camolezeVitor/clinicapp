import { Pagamento } from "@mapping/core";
import { PagamentoImpl } from "@mapping/entities";

export type PagamentoDTO = Pagamento;

export function createPagamentoDTOFromEntity(pagamento: PagamentoImpl): PagamentoDTO {
    return {
        formaDePagamento: pagamento.formaDePagamento,
        valor: pagamento.valor
    }
}