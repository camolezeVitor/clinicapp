import { ContaCorrente } from "@mapping/core"
import { PagamentoDTO } from "./pagamento"

export type ContaCorrenteDTO = {
    historicoDePagamentos: Array<PagamentoDTO>
} & ContaCorrente;