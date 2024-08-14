import { Paciente } from "@mapping/core";
import { ContaCorrenteDTO } from "./conta-corrente";
import { DoencaDTO } from "./doenca";
import { PessoaDTO } from "./pessoa"
import { ProntuarioDTO } from "./prontuario";

export type PacienteDTO = {
    pessoa: PessoaDTO,
    prontuarios: Array<ProntuarioDTO>,
    contaCorrente: ContaCorrenteDTO,
    doencas: Array<DoencaDTO>
} & Paciente;