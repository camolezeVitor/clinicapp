import { ConsultaDTO } from "../dtos/consulta";
import { Funcionario } from "./funcionario"
import { Paciente } from "./paciente"
import { Servico } from "./servico"

export class Consulta {

    paciente: Paciente;
    funcionario: Funcionario;
    servicos: Array<Servico>;
    valor: number;
    valorTotalPago: number;
    data: Date;
    horarioInicio: string;
    horarioFim: string;
    concluida: boolean;
    foiPago: boolean;

    constructor(consultaDto: ConsultaDTO) {
        this.paciente = new Paciente(consultaDto.paciente);
        this.funcionario = new Funcionario(consultaDto.funcionario);
        this.servicos = consultaDto.servicos.map(servico => (new Servico(servico)));
        this.valor = consultaDto.valor;
        this.valorTotalPago = consultaDto.valorTotalPago;
        this.data = consultaDto.data;
        this.horarioInicio = consultaDto.horarioInicio;
        this.horarioFim = consultaDto.horarioFim;
        this.concluida = consultaDto.concluida;
        this.foiPago = consultaDto.foiPago;
    }
}