import { PagamentoDTO } from "./pagamento"

export type ContaCorrenteDTO = {
    valorAPagar: number | null,
    valorPago: number | null,
    devendo: boolean,
    historicoDePagamentos: Array<PagamentoDTO>
}