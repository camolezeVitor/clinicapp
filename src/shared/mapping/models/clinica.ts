import { ClinicaDTO } from "../dtos/clinica";
import { Conta } from "./conta"
import { Endereco } from "./endereco";

export class Clinica {
    nomeDaClinica: string;
    contas: Array<Conta>;
    endereco: Endereco;

    constructor(clinicaDto: ClinicaDTO) {
        this.nomeDaClinica = clinicaDto.nomeDaClinica;
        this.contas = clinicaDto.contas.map(conta => (new Conta(conta)));
        this.endereco = new Endereco(clinicaDto.endereco);
    }
}