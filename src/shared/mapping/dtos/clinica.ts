import { Clinica } from "@mapping/core";
import { ContaDTO } from "./conta"
import { EnderecoDTO } from "./endereco"

export type ClinicaDTO = {
    contas?: Array<ContaDTO>,
    endereco?: EnderecoDTO,
} & Clinica;