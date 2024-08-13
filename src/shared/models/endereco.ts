import { EnderecoDto } from "../dtos/endereco";

export class Endereco {

    cep: string;
    cidade: string;
    uf: string;
    bairro: string;
    numero: number;
    complemento: string;

    constructor(endereco: EnderecoDto) {
        this.cep = endereco.cep;
        this.cidade = endereco.cidade;
        this.uf = endereco.uf;
        this.bairro = endereco.bairro;
        this.numero = endereco.numero;
        this.complemento = endereco.complemento; 
    }
}