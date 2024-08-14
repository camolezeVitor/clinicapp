import { ServicoDTO } from "../dtos/servico";

export class Servico {
    
    id: string;
    tipoServico: string;
    descricao: string;
    valor: number;
    gastos: number;

    constructor(servicoDto: ServicoDTO) {
        this.id = servicoDto.id;
        this.tipoServico = servicoDto.tipoServico;
        this.descricao = servicoDto.descricao;
        this.valor = servicoDto.valor;
        this.gastos = servicoDto.gastos;
    }
}