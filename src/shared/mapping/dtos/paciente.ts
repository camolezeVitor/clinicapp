import { Paciente } from "@mapping/core";
import { ContaCorrenteDTO, createContaCorrenteDTOFromEntity } from "./conta-corrente";
import { createDoencaDTOFromEntity, DoencaDTO } from "./doenca";
import { createPessoaDTOFromEntity, PessoaDTO } from "./pessoa"
import { createProntuarioDTOFromEntity, ProntuarioDTO } from "./prontuario";
import { PacienteImpl } from "@mapping/entities";

export type PacienteDTO = {
    pessoa?: PessoaDTO,
    prontuarios?: Array<ProntuarioDTO>,
    contaCorrente?: ContaCorrenteDTO,
    doencas?: Array<DoencaDTO>
} & Paciente;

export function createPacienteDTOFromEntity(paciente: PacienteImpl): PacienteDTO {
    return {
        estadoAtual: paciente.estadoAtual,
        contaCorrente: paciente.contaCorrente ? createContaCorrenteDTOFromEntity(paciente.contaCorrente) : undefined,
        doencas: paciente.doencas ? paciente.doencas.map(doenca => (createDoencaDTOFromEntity(doenca))) : undefined,
        pessoa: paciente.pessoa ? createPessoaDTOFromEntity(paciente.pessoa) : undefined,
        prontuarios: paciente.prontuarios ? paciente.prontuarios.map(prontuario => (createProntuarioDTOFromEntity(prontuario))) : undefined
    }
}