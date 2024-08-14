import { PacienteDTO } from "../dtos/paciente";
import { ContaCorrenteImpl } from "./conta-corrente";
import { DoencaImpl } from "./doenca";
import { PessoaImpl } from "./pessoa"
import { ProntuarioImpl } from "./prontuario";

export class PacienteImpl {

    estadoAtual: string;
    pessoa: PessoaImpl;
    prontuarios: Array<ProntuarioImpl>;
    contaCorrente: ContaCorrenteImpl;
    doencas: Array<DoencaImpl>;

    constructor(pacienteDto: PacienteDTO) {
        this.pessoa = new PessoaImpl(pacienteDto.pessoa);
        this.prontuarios = pacienteDto.prontuarios.map(prontuarioDto => (new ProntuarioImpl(prontuarioDto)));
        this.contaCorrente = new ContaCorrenteImpl(pacienteDto.contaCorrente);
        this.doencas = pacienteDto.doencas.map(doencaDto => (new DoencaImpl(doencaDto)));
        this.estadoAtual = pacienteDto.estadoAtual;
    }
}