import { ConsultaDTO } from "../dtos/consulta";
import { FuncionarioImpl } from "./funcionario"
import { PacienteImpl } from "./paciente"
import { ServicoImpl } from "./servico"

export class ConsultaImpl {

    paciente: PacienteImpl;
    funcionario: FuncionarioImpl;
    servicos: Array<ServicoImpl>;
    valor: number;
    valorTotalPago: number;
    data: Date;
    horarioInicio: string;
    horarioFim: string;
    concluida: boolean;
    foiPago: boolean;

    constructor(consultaDto: ConsultaDTO) {
        this.paciente = new PacienteImpl(consultaDto.paciente);
        this.funcionario = new FuncionarioImpl(consultaDto.funcionario);
        this.servicos = consultaDto.servicos.map(servico => (new ServicoImpl(servico)));
        this.valor = consultaDto.valor;
        this.valorTotalPago = consultaDto.valorTotalPago;
        this.data = consultaDto.data;
        this.horarioInicio = consultaDto.horarioInicio;
        this.horarioFim = consultaDto.horarioFim;
        this.concluida = consultaDto.concluida;
        this.foiPago = consultaDto.foiPago;
    }
}