import { Prontuario } from "@mapping/core";
import { ProntuarioDTO } from "@mapping/dtos";

export class ProntuarioImpl implements Prontuario {
    
    id: string;
    contexto: string;
    prontuario: string;

    constructor(prontuarioDto: ProntuarioDTO) {
        this.id = prontuarioDto.id;
        this.contexto = prontuarioDto.contexto;
        this.prontuario = prontuarioDto.prontuario;
    }
}