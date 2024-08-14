import { FuncionarioDTO } from "./funcionario"
import { PacienteDTO } from "./paciente"
import { ServicoDTO } from "./servico"

export type ConsultaDTO = {
    paciente: PacienteDTO,
    funcionario: FuncionarioDTO,
    servicos: Array<ServicoDTO>,
    valor: number,
    valorTotalPago: number,
    data: Date,
    horarioInicio: string,
    horarioFim: string,
    concluida: boolean,
    foiPago: boolean
}