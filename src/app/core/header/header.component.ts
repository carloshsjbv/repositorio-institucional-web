import { Component } from "@angular/core";
import { UserService } from "../user/user.service";
import { User } from "../user/user";
import { Observable } from "rxjs";
import { TokenService } from "../token/token.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    // $ Indica que a variável irá aramazenar o valor de um OBSERVABLE.
    user$: Observable<User>;
    user: User;

    constructor(
        private userService: UserService,
        private tokenService: TokenService
    ) {
        this.user$ = userService.getUser();

        // Pega os valores do observable e passa para a variavel local.
        this.user$.subscribe(user => {
            this.user = user
        });
    }

    hasToken(): boolean {
        return this.tokenService.hasToken();
    }

    logout(): void {
        return this.tokenService.removeToken();
    }



}