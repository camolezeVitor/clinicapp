import { Endereco } from "@mapping/core";
import { EnderecoDTO } from "@mapping/dtos";

export class EnderecoImpl implements Endereco {

    cep: string;
    cidade: string;
    uf: string;
    bairro: string;
    numero: number;
    complemento: string;

    constructor(endereco: EnderecoDTO) {
        this.cep = endereco.cep;
        this.cidade = endereco.cidade;
        this.uf = endereco.uf;
        this.bairro = endereco.bairro;
        this.numero = endereco.numero;
        this.complemento = endereco.complemento; 
    }
}