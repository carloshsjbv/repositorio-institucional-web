import { Injectable } from "@angular/core";
import { TokenService } from "../token/token.service";
import { Subject, BehaviorSubject } from "rxjs";
import { User } from "./user";
import * as jwt_decode from 'B:/TCC/tcc/Software/web-app/node_modules/jwt-decode';

/**
 * Serviço responsável pela obtenção dos dados do usuário através da biblioteca jwt_decode.
 */
@Injectable({ providedIn: 'root' })
export class UserService
{

    // Declaração BehaviorSubject do tipo USER
    /**
     * BehaviorSubject -> grava a ultima emissão de um usuário
     * e deixa disponível para que seja consumida.
     */
    private userSubject = new BehaviorSubject<User>(null);

    constructor(private tokenService: TokenService)
    {
        // Só decodifica quando existe um token.
        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    // Seta o token
    setToken(authToken: string)
    {
        this.tokenService.setToken(authToken);

        // Chamada para o método de decodificação
        this.decodeAndNotify();
    }

    getUser()
    {
        // Retorna o usuário como um observable.
        return this.userSubject.asObservable();
    }

    private decodeAndNotify()
    {

        // Obtém token, vindo do tokenService.
        const token = this.tokenService.getToken();

        // Decodifica através do jwt_decode, para obter o payload com os dados de usuário.
        const user = jwt_decode(token) as User;

        // Seta o valor do subject com o valor do payload decoficado.
        this.userSubject.next(user);
    }

}