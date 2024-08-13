import { ProntuarioDTO } from "../dtos/prontuario";

export class Prontuario {
    
    id: string;
    contexto: string;
    prontuario: string;

    constructor(prontuarioDto: ProntuarioDTO) {
        this.id = prontuarioDto.id;
        this.contexto = prontuarioDto.contexto;
        this.prontuario = prontuarioDto.prontuario;
    }
}