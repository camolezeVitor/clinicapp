import { PacienteDTO } from "../dtos/paciente";
import { ContaCorrente } from "./conta-corrente";
import { Doenca } from "./doenca";
import { Pessoa } from "./pessoa"
import { Prontuario } from "./prontuario";

export class Paciente {

    pessoa: Pessoa;
    prontuarios: Array<Prontuario>;
    contaCorrente: ContaCorrente;
    doencas: Array<Doenca>;

    constructor(pacienteDto: PacienteDTO) {
        this.pessoa = new Pessoa(pacienteDto.pessoa);
        this.prontuarios = pacienteDto.prontuarios.map(prontuarioDto => (new Prontuario(prontuarioDto)));
        this.contaCorrente = new ContaCorrente(pacienteDto.contaCorrente);
        this.doencas = pacienteDto.doencas.map(doencaDto => (new Doenca(doencaDto)));
    }
}