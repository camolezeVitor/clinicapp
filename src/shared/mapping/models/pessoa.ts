import { Pessoa } from "@mapping/core";
import { PessoaDTO } from "@mapping/dtos";
import { EnderecoImpl } from "@mapping/models";

export class PessoaImpl implements Pessoa {
    
    id: string;
    nome: string;
    rg: string;
    cpf: string;
    dataNascimento: Date;
    dataCadastro: Date;
    foto?: Blob;
    telefoneCelular: string;
    endereco?: EnderecoImpl;

    constructor(pessoaDto: PessoaDTO) {

        const { endereco } = pessoaDto;

        this.id = pessoaDto.id;
        this.nome = pessoaDto.nome;
        this.rg = pessoaDto.rg;
        this.cpf = pessoaDto.cpf;
        this.dataNascimento = pessoaDto.dataNascimento;
        this.dataCadastro = pessoaDto.dataCadastro;
        this.foto = pessoaDto.foto;
        this.telefoneCelular = pessoaDto.telefoneCelular;
        this.endereco = endereco ? new EnderecoImpl(endereco) : undefined; 
    }
}