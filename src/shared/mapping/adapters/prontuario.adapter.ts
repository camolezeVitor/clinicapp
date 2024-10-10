import { createProntuarioDTOFromEntity, ProntuarioDTO } from "@mapping/dtos";
import { ProntuarioImpl } from "src/shared/mapping/entities";

export class ProntuarioAdapter {
    public static fromDTOToEntity(prontuarioDto: ProntuarioDTO): ProntuarioImpl {
        return new ProntuarioImpl(prontuarioDto);
    } 
    public static fromEntityFromDTO(prontuarioEntity: ProntuarioImpl): ProntuarioDTO {
        return createProntuarioDTOFromEntity(prontuarioEntity);
    }
}