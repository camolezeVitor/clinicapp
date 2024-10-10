import { Prontuario } from "@mapping/core";
import { ProntuarioImpl } from "@mapping/entities";

export type ProntuarioDTO = Prontuario;

export function createProntuarioDTOFromEntity(prontuario: ProntuarioImpl): ProntuarioDTO {
    return {
        contexto: prontuario.contexto,
        id: prontuario.id,
        prontuario: prontuario.prontuario
    }
}