import { ProntuarioDTO } from "@mapping/dtos";
import { ProntuarioImpl } from "src/shared/mapping/entities";

export class ProntuarioAdapter {
    public static fromDtoToModel(prontuarioDto: ProntuarioDTO): ProntuarioImpl {
        return new ProntuarioImpl(prontuarioDto);
    } 
}