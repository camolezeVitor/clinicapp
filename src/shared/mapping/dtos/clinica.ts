import { ContaDTO } from "./conta"

export type ClinicaDTO = {
    nomeDaClinica: string,
    contas: Array<ContaDTO>
}