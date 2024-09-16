import { Funcionario } from "@mapping/core";
import { FuncionarioDTO } from "@mapping/dtos";
import { PessoaImpl } from "src/shared/mapping/entities";
import { UsuarioImpl } from "src/shared/mapping/entities";

export class FuncionarioImpl implements Funcionario {
    
    id: string;
    cargo: string;
    formacao: string;
    salario: number;
    pessoa?: PessoaImpl;
    usuario?: UsuarioImpl;

    constructor(funcionarioDTO: FuncionarioDTO) {

        //Parâmetros opcionais
        const { pessoa, usuario } = funcionarioDTO;

        this.pessoa = pessoa ? new PessoaImpl(pessoa) : undefined;
        this.usuario = usuario ? new UsuarioImpl(usuario) : undefined;

        this.id = funcionarioDTO.id;
        this.cargo = funcionarioDTO.cargo;
        this.formacao = funcionarioDTO.formacao;
        this.salario = funcionarioDTO.salario;
    }
}