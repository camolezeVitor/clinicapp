import { Consulta } from "@mapping/core"
import { FuncionarioDTO } from "./funcionario"
import { PacienteDTO } from "./paciente"
import { ServicoDTO } from "./servico"

export type ConsultaDTO = {
    paciente: PacienteDTO,
    funcionario: FuncionarioDTO,
    servicos: Array<ServicoDTO>,
} & Consulta;