import { PessoaDTO } from "../dtos/pessoa";
import { Endereco } from "./endereco";

export class Pessoa {
    
    id: string;
    nome: string;
    rg: string;
    cpf: string;
    dataNascimento: Date;
    dataCadastro: Date;
    foto: Blob;
    telefoneCelular: string;
    endereco: Endereco;

    constructor(pessoa: PessoaDTO) {
        this.id = pessoa.id;
        this.nome = pessoa.nome;
        this.rg = pessoa.rg;
        this.cpf = pessoa.cpf;
        this.dataNascimento = pessoa.dataNascimento;
        this.dataCadastro = pessoa.dataCadastro;
        this.foto = pessoa.foto;
        this.telefoneCelular = pessoa.telefoneCelular;
        this.endereco = new Endereco(pessoa.endereco); 
    }
}