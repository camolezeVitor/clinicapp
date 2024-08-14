import { ProntuarioDTO } from "@mapping/dtos";
import { ProntuarioImpl } from "@mapping/models";

export class ProntuarioAdapter {
    public static fromDtoToModel(prontuarioDto: ProntuarioDTO): ProntuarioImpl {
        return new ProntuarioImpl(prontuarioDto);
    } 
}