import { PessoaDTO } from "../dtos/pessoa";
import { EnderecoImpl } from "./endereco";

export class PessoaImpl {
    
    id: string;
    nome: string;
    rg: string;
    cpf: string;
    dataNascimento: Date;
    dataCadastro: Date;
    foto: Blob;
    telefoneCelular: string;
    endereco: EnderecoImpl;

    constructor(pessoa: PessoaDTO) {
        this.id = pessoa.id;
        this.nome = pessoa.nome;
        this.rg = pessoa.rg;
        this.cpf = pessoa.cpf;
        this.dataNascimento = pessoa.dataNascimento;
        this.dataCadastro = pessoa.dataCadastro;
        this.foto = pessoa.foto;
        this.telefoneCelular = pessoa.telefoneCelular;
        this.endereco = new EnderecoImpl(pessoa.endereco); 
    }
}