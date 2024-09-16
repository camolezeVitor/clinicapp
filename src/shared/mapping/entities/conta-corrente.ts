import { ContaCorrente } from "@mapping/core";
import { ContaCorrenteDTO } from "@mapping/dtos";
import { PagamentoImpl } from "src/shared/mapping/entities";

export class ContaCorrenteImpl implements ContaCorrente {

    valorAPagar: number | null;
    valorPago: number | null;
    devendo: boolean;
    historicoDePagamentos?: Array<PagamentoImpl>;

    constructor(contaCorrenteDto: ContaCorrenteDTO) {

        //Parâmetros opcionais
        const { historicoDePagamentos } = contaCorrenteDto;

        this.historicoDePagamentos = historicoDePagamentos ? 
            historicoDePagamentos.map(pagamentoDto => (new PagamentoImpl(pagamentoDto))) : undefined;

        this.valorAPagar = contaCorrenteDto.valorAPagar;
        this.valorPago = contaCorrenteDto.valorPago;
        this.devendo = contaCorrenteDto.devendo;
    }
}