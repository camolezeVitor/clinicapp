import { Consulta } from "@mapping/core";
import { ConsultaDTO } from "@mapping/dtos";
import { FuncionarioImpl } from "src/shared/mapping/entities";
import { PacienteImpl } from "src/shared/mapping/entities";
import { ServicoImpl } from "src/shared/mapping/entities";

export class ConsultaImpl implements Consulta {

    paciente?: PacienteImpl;
    funcionario?: FuncionarioImpl;
    servicos?: Array<ServicoImpl>;
    valor: number;
    valorTotalPago: number;
    data: Date;
    horarioInicio: string;
    horarioFim: string;
    concluida: boolean;
    foiPago: boolean;

    constructor(consultaDto: ConsultaDTO) {

        //Parâmetros opcionais
        const { paciente, funcionario, servicos } = consultaDto;

        this.paciente = paciente ? new PacienteImpl(paciente) : undefined;
        this.funcionario = funcionario ? new FuncionarioImpl(funcionario) : undefined;
        this.servicos = servicos ? servicos.map(servico => (new ServicoImpl(servico))) : undefined;

        this.valor = consultaDto.valor;
        this.valorTotalPago = consultaDto.valorTotalPago;
        this.data = consultaDto.data;
        this.horarioInicio = consultaDto.horarioInicio;
        this.horarioFim = consultaDto.horarioFim;
        this.concluida = consultaDto.concluida;
        this.foiPago = consultaDto.foiPago;
    }
}