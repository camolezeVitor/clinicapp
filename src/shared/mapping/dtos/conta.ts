import { Conta } from "@mapping/core";
import { ContaImpl } from "@mapping/entities";

export type ContaDTO = Conta;

export function createContaDTOFromEntity(conta: ContaImpl): ContaDTO {
    return {
        dataDePagamento: conta.dataDePagamento,
        descricao: conta.descricao,
        foiPago: conta.foiPago,
        id: conta.id,
        nome: conta.nome,
        valor: conta.valor
    }
}