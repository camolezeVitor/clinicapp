import { ContaDTO } from "./conta"
import { EnderecoDTO } from "./endereco"

export type ClinicaDTO = {
    nomeDaClinica: string,
    contas: Array<ContaDTO>,
    endereco: EnderecoDTO,
}