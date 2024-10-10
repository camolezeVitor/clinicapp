import { Doenca } from "@mapping/core";
import { DoencaImpl } from "@mapping/entities";

export type DoencaDTO = Doenca;

export function createDoencaDTOFromEntity(doenca: DoencaImpl): DoencaDTO {
    return {
        codigo: doenca.codigo,
        descricao: doenca.descricao,
        id: doenca.id,
        nome: doenca.nome,
        tipo: doenca.tipo
    }
}