import { PagamentoDTO } from "../dtos/pagamento";

export class PagamentoImpl {
    
    valor: number;
    formaDePagamento: string;

    constructor(pagamentoDto: PagamentoDTO) {
        this.valor = pagamentoDto.valor;
        this.formaDePagamento = pagamentoDto.formaDePagamento;
    }
}