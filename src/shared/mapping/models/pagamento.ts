import { PagamentoDTO } from "../dtos/pagamento";

export class Pagamento {
    
    valor: number;
    formaDePagamento: string;

    constructor(pagamentoDto: PagamentoDTO) {
        this.valor = pagamentoDto.valor;
        this.formaDePagamento = pagamentoDto.formaDePagamento;
    }
}