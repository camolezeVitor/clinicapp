import { Pagamento } from "@mapping/core";
import { PagamentoDTO } from "@mapping/dtos";

export class PagamentoImpl implements Pagamento {
    
    valor: number;
    formaDePagamento: string;

    constructor(pagamentoDto: PagamentoDTO) {
        this.valor = pagamentoDto.valor;
        this.formaDePagamento = pagamentoDto.formaDePagamento;
    }
}