import { Clinica } from "@mapping/core";
import { ContaDTO, createContaDTOFromEntity } from "./conta"
import { createEnderecoDTOFromEntity, EnderecoDTO } from "./endereco"
import { ClinicaImpl } from "@mapping/entities";

export type ClinicaDTO = {
    contas?: Array<ContaDTO>,
    endereco?: EnderecoDTO,
} & Clinica;

export function createClinicaDTOFromEntity(clinicaImpl: ClinicaImpl): ClinicaDTO {
    return {
        nomeDaClinica: clinicaImpl.nomeDaClinica,
        contas: clinicaImpl.contas ? clinicaImpl.contas.map(conta => createContaDTOFromEntity(conta)) : undefined,
        endereco: clinicaImpl.endereco ? createEnderecoDTOFromEntity(clinicaImpl.endereco) : undefined
    };
}