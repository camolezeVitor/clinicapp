import { Doenca } from "@mapping/core";
import { DoencaDTO } from "@mapping/dtos";

export class DoencaImpl implements Doenca {

    id: string;
    nome: string;
    codigo: string;
    descricao: string;
    tipo: string;
    
    constructor(doencaDto: DoencaDTO) {
        this.id = doencaDto.id;
        this.nome = doencaDto.nome;
        this.codigo = doencaDto.codigo;
        this.descricao = doencaDto.descricao;
        this.tipo = doencaDto.tipo;
    }
}