import { Injectable } from "@angular/core";
import { FuncionarioImpl } from "@mapping/models";
import { UserFuncionarioState } from "../enums/states/user-funcionario-state";

/**
 * @auhtor camolezeVitor_
 * @description
 * Serviço utilizado para informar sobre o estado do usuário
 * funcionário, para a aplicação desfrutar das informações
 */
@Injectable({
    providedIn: "root",
})
export class UserFuncionarioService {
    
    private usuarioFuncionarioLogado: FuncionarioImpl | null = null;
    private usuarioFuncionarioState: UserFuncionarioState = UserFuncionarioState.NAO_LOGADO;
    public dialogDeAvisoDeDesconexao: boolean = false;
    
    constructor() {};

    public setFuncionarioLogado(funcionarioLogado: FuncionarioImpl): void {
        this.usuarioFuncionarioLogado = funcionarioLogado;
        this.dialogDeAvisoDeDesconexao = false;
    }

    public disconectFuncionarioLogado(): void {
        this.usuarioFuncionarioLogado = null;
        this.dialogDeAvisoDeDesconexao = true;
    }

    public getFuncionarioLogado(): FuncionarioImpl | null {
        return this.usuarioFuncionarioLogado;
    }

    public getFuncionarioState(): UserFuncionarioState {
        return this.usuarioFuncionarioState;
    }
}