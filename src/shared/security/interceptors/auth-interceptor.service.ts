import { Inject, Injectable } from "@angular/core";
import { JwtToken } from "@mapping/dependencies";
import { TokenService } from "../token/token.service";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, from, Observable, take, throwError, timeout } from "rxjs";
import { TokenState } from "src/shared/enums/states/token-state";
import { UserFuncionarioService } from "src/shared/services/user-funcionario.service";
import { UserFuncionarioState } from "src/shared/enums/states/user-funcionario-state";
import { AuthInterceptionAction } from "src/shared/enums/actions/auth-interception.actions";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    private tokenService: JwtToken = Inject(TokenService);
    private usarioFuncionarioService: UserFuncionarioService = Inject(UserFuncionarioService);

    private handleAuthAction(tokenState: TokenState, usuarioState: UserFuncionarioState): AuthInterceptionAction {

        //Caso o usuário que estiver tentando fazer a conexão estiver com o token inválido
        //vai apitar um erro e desconectar o usuário.
        if (usuarioState == "LOGGED" && tokenState == "INVALID") {
            this.usarioFuncionarioService.disconectFuncionarioLogado();
            return "ERROR";
        }

        //Caso o usuário estiver tentando fazer login, vai dar sucesso pois não há nenhuma razão 
        //para bloquear ele de fazer uma requisição, daí vai para o backend tratar!
        //---
        //Caso estiver tudo certo também.
        return "SUCCESS";
    }

    private executeAuthAction(action: AuthInterceptionAction, req: HttpRequest<any>, next: HttpHandler) {
        //Não existe problema!
        if (action == "SUCCESS") {
            return next.handle(req);
        }

        //Nesse caso existe :(
        return next.handle(req).pipe(
            timeout(30000),
            catchError(() => {
                return throwError(() => 
                    new Error(
                        "Autenticação Inválida!", 
                        {cause: "Usuário não está devidamente autenticado."}
                    )
                )
            })
        ) as Observable<HttpEvent<any>>
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const usuarioState = this.usarioFuncionarioService.getFuncionarioState();

        const tokenState$ = from(this.tokenService.verifyTokenState());
        let acaoTomada: AuthInterceptionAction = "ERROR";

        tokenState$.pipe(take(1)).subscribe(state => {
            acaoTomada = this.handleAuthAction(state, usuarioState);
        });

        return this.executeAuthAction(acaoTomada, req, next);
    }
}