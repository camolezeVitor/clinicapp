import { Conta } from "@mapping/core";
import { ContaDTO } from "@mapping/dtos";

export class ContaImpl implements Conta {

    id: string;
    nome: string;
    descricao: string;
    valor: number;
    dataDePagamento: Date;
    foiPago: boolean;

    constructor(contaDto: ContaDTO) {
        this.id = contaDto.id;
        this.nome = contaDto.nome;
        this.descricao = contaDto.descricao;
        this.valor = contaDto.valor;
        this.dataDePagamento = contaDto.dataDePagamento;
        this.foiPago = contaDto.foiPago;
    }
}