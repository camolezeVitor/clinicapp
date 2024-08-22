import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../token/token.service";
import { JwtToken } from "@mapping/dependencies";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    private tokenService: JwtToken = Inject(TokenService);

    intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenService.getToken()

        const request: HttpRequest<any> = req.clone();

        if (token) {
            request.headers.set("Bearer ", token);
        }

        return handler.handle(request);
    }

}