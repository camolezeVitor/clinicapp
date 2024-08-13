import { FuncionarioDTO } from "../dtos/funcionario";
import { Pessoa } from "./pessoa";
import { Usuario } from "./usuario";

export class Funcionario {
    
    id: string;
    cargo: string;
    formacao: string;
    salario: number;
    pessoa: Pessoa;
    usuario: Usuario;

    constructor(funcionarioDTO: FuncionarioDTO) {
        this.id = funcionarioDTO.id;
        this.cargo = funcionarioDTO.cargo;
        this.formacao = funcionarioDTO.formacao;
        this.salario = funcionarioDTO.salario;
        this.pessoa = new Pessoa(funcionarioDTO.pessoa);
        this.usuario = new Usuario(funcionarioDTO.usuario);
    }
}