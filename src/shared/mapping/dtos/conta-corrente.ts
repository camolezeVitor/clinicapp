import { ContaCorrente } from "@mapping/core"
import { createPagamentoDTOFromEntity, PagamentoDTO } from "./pagamento"
import { ContaCorrenteImpl } from "@mapping/entities";

export type ContaCorrenteDTO = {
    historicoDePagamentos?: Array<PagamentoDTO>
} & ContaCorrente;

export function createContaCorrenteDTOFromEntity(contaCorrente: ContaCorrenteImpl): ContaCorrenteDTO {
    return {
        devendo: contaCorrente.devendo,
        valorAPagar: contaCorrente.valorAPagar,
        valorPago: contaCorrente.valorPago,
        historicoDePagamentos: contaCorrente.historicoDePagamentos ? contaCorrente.historicoDePagamentos.map(conta => (createPagamentoDTOFromEntity(conta))) : undefined
    }
}