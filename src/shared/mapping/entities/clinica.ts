import { Clinica } from "@mapping/core";
import { ClinicaDTO } from "@mapping/dtos";
import { ContaImpl } from "src/shared/mapping/entities";
import { EnderecoImpl } from "src/shared/mapping/entities";

export class ClinicaImpl implements Clinica {

    nomeDaClinica: string;
    contas?: Array<ContaImpl>;
    endereco?: EnderecoImpl;

    constructor(clinicaDto: ClinicaDTO) {

        //Parâmetros opcionáis
        const { contas, endereco } = clinicaDto;

        this.contas = contas ? contas.map(conta => (new ContaImpl(conta))) : undefined;
        this.endereco = endereco ? new EnderecoImpl(endereco) : undefined;

        this.nomeDaClinica = clinicaDto.nomeDaClinica;
    }
}