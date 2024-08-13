import { ContaCorrenteDTO } from "../dtos/conta-corrente";
import { Pagamento } from "./pagamento";

export class ContaCorrente {

    valorAPagar: number | null;
    valorPago: number | null;
    devendo: boolean;
    historicoDePagamentos: Array<Pagamento>;

    constructor(contaCorrenteDto: ContaCorrenteDTO) {
        this.valorAPagar = contaCorrenteDto.valorAPagar;
        this.valorPago = contaCorrenteDto.valorPago;
        this.devendo = contaCorrenteDto.devendo;
        this.historicoDePagamentos = contaCorrenteDto.historicoDePagamentos.map(pagamentoDto => (new Pagamento(pagamentoDto)));
    }
}