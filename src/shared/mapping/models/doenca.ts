import { DoencaDTO } from "../dtos/doenca";

export class DoencaImpl {

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