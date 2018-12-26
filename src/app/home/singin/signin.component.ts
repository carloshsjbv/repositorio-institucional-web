import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../core/auth/auth.service";
import { Router } from "@angular/router";
import { TokenService } from "../../core/token/token.service";

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;
    show: boolean;

    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): any {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    login() {

        const userName: string = this.loginForm.get('userName').value;
        const password: string = this.loginForm.get('password').value;

        this.authService
            .authenticate(userName, password)
            .subscribe(
                res => {
                    this.router.navigateByUrl('/');
                },
                err => {
                    //this.loginForm.reset();
                    this.show = false;
                    if (err.status === 403) {
                        $("#formValidations").append("Você não tem permissão para cadastrar.");
                    } else if (err.status === 500) {
                        $("#formValidations").append("Houveram problemas ao cadastrar.");
                    } else {
                        $("#formValidations").append("Houveram problemas ao conectar com o servidor.");
                    }

                    this.emailInput.nativeElement.focus();
                }
            )

    }

}