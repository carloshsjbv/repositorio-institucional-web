import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { TokenService } from "./token/token.service";


@Injectable({ providedIn: 'root' })
export class AppConfig {

    constructor(
        private auth: TokenService
    ) { }

    apiContext: string = 'http://192.168.0.108:4200/api/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.auth.getToken()
        })
    };

}