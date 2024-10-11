import { Injectable } from "@angular/core";
import { FuncionarioImpl } from "src/shared/mapping/entities";
import { UserFuncionarioState } from "../enums/user-logged.state";

/**
 * @auhtor camolezeVitor_
 * @description
 * Serviço utilizado para informar sobre o estado do usuário
 * funcionário, para a aplicação desfrutar das informações
 */
@Injectable({
    providedIn: "root",
})
export class UserLoggingService {
    
    private usuarioFuncionarioLogado: FuncionarioImpl | null = null;
    private usuarioFuncionarioState: UserFuncionarioState = "NOT_LOGGED";
    public desconexaoWarn: boolean = false;
    
    constructor() {};

    public setFuncionarioLogado(funcionarioLogado: FuncionarioImpl): void {
        this.usuarioFuncionarioLogado = funcionarioLogado;
        this.desconexaoWarn = false;
    }

    public disconectFuncionarioLogado(): void {
        this.usuarioFuncionarioLogado = null;
        this.desconexaoWarn = true;
    }

    public getFuncionarioLogado(): FuncionarioImpl | null {
        return this.usuarioFuncionarioLogado;
    }

    public getFuncionarioState(): UserFuncionarioState {
        return this.usuarioFuncionarioState;
    }
}