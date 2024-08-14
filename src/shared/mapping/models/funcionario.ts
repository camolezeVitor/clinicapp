import { FuncionarioDTO } from "../dtos/funcionario";
import { PessoaImpl } from "./pessoa";
import { UsuarioImpl } from "./usuario";

export class FuncionarioImpl {
    
    id: string;
    cargo: string;
    formacao: string;
    salario: number;
    pessoa: PessoaImpl;
    usuario: UsuarioImpl;

    constructor(funcionarioDTO: FuncionarioDTO) {
        this.id = funcionarioDTO.id;
        this.cargo = funcionarioDTO.cargo;
        this.formacao = funcionarioDTO.formacao;
        this.salario = funcionarioDTO.salario;
        this.pessoa = new PessoaImpl(funcionarioDTO.pessoa);
        this.usuario = new UsuarioImpl(funcionarioDTO.usuario);
    }
}