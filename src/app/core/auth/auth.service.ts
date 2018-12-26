import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { tap } from 'rxjs/operators'
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig,
        private userService: UserService
    ) { }

    authenticate(username: string, password: string) {
        return this.http
            .post(this.appConfig.apiContext + 'login',
                { username, password },
                { observe: 'response' } // exposição do header, deixando-o disponível para ser acessado no pipe.
            )
            .pipe(tap(res => {
                if (res != null) {
                    const authToken = res.headers.get('authorization');
                    this.userService.setToken(authToken);
                }
            }));
    }
}
