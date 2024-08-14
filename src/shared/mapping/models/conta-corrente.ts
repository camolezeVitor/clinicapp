import { ContaCorrenteDTO } from "../dtos/conta-corrente";
import { PagamentoImpl } from "./pagamento";

export class ContaCorrenteImpl {

    valorAPagar: number | null;
    valorPago: number | null;
    devendo: boolean;
    historicoDePagamentos: Array<PagamentoImpl>;

    constructor(contaCorrenteDto: ContaCorrenteDTO) {
        this.valorAPagar = contaCorrenteDto.valorAPagar;
        this.valorPago = contaCorrenteDto.valorPago;
        this.devendo = contaCorrenteDto.devendo;
        this.historicoDePagamentos = contaCorrenteDto.historicoDePagamentos.map(pagamentoDto => (new PagamentoImpl(pagamentoDto)));
    }
}