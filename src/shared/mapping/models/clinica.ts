import { ClinicaDTO } from "../dtos/clinica";
import { ContaImpl } from "./conta"
import { EnderecoImpl } from "./endereco";

export class ClinicaImpl {
    nomeDaClinica: string;
    contas: Array<ContaImpl>;
    endereco: EnderecoImpl;

    constructor(clinicaDto: ClinicaDTO) {
        this.nomeDaClinica = clinicaDto.nomeDaClinica;
        this.contas = clinicaDto.contas.map(conta => (new ContaImpl(conta)));
        this.endereco = new EnderecoImpl(clinicaDto.endereco);
    }
}