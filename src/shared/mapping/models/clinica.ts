import { ClinicaDTO } from "../dtos/clinica";
import { Conta } from "./conta"

export class Clinica {
    nomeDaClinica: string;
    contas: Array<Conta>;

    constructor(clinicaDto: ClinicaDTO) {
        this.nomeDaClinica = clinicaDto.nomeDaClinica;
        this.contas = clinicaDto.contas.map(conta => (new Conta(conta)));
    }
}