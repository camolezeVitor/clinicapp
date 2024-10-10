import { Consulta } from "@mapping/core"
import { createFuncionarioDTOFromEntity, FuncionarioDTO } from "./funcionario"
import { createPacienteDTOFromEntity, PacienteDTO } from "./paciente"
import { createServicoDTOFromEntity, ServicoDTO } from "./servico"
import { ConsultaImpl } from "@mapping/entities";

export type ConsultaDTO = {
    paciente?: PacienteDTO,
    funcionario?: FuncionarioDTO,
    servicos?: Array<ServicoDTO>,
} & Consulta;

export function createConsultaDTOFromEntity(consulta: ConsultaImpl): ConsultaDTO {
    return {
        concluida: consulta.concluida,
        data: consulta.data,
        foiPago: consulta.foiPago,
        horarioFim: consulta.horarioFim,
        horarioInicio: consulta.horarioInicio,
        valor: consulta.valor,
        valorTotalPago: consulta.valorTotalPago,
        funcionario: consulta.funcionario ? createFuncionarioDTOFromEntity(consulta.funcionario) : undefined,
        paciente: consulta.paciente ? createPacienteDTOFromEntity(consulta.paciente) : undefined,
        servicos: consulta.servicos ? consulta.servicos.map(servico => (createServicoDTOFromEntity(servico))) : undefined
    }
}