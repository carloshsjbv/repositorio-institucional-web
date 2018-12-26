import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SubmissoesService } from './submissoes.service';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

const formData = new FormData();

@Component({
    selector: 'app-submissoes',
    templateUrl: './submissoes.component.html',
    styleUrls: ['./submissoes.component.css']
})
export class SubmissoesComponent implements OnInit {

    show: boolean;

    showSuccess: boolean;
    showValidations: boolean;
    mensagemValidacao: string;

    palavras: string = '';
    arquivo: File = null;

    user$: Observable<User>;
    user: User;


    constructor(
        private submissoesService: SubmissoesService,
        private userService: UserService
    ) { }

    ngOnInit() {
    }

    // Função para settar o arquivo selecionado como o arquivo que será enviado ao BD.
    arquivoSeleciondado(event) {
        this.arquivo = <File>event.target.files[0];

        if (event.target.files && event.target.files[0]) {
            const arquivo = event.target.files[0];
            formData.append('arquivo', arquivo);
        }
    }

    onSubmit(formulario) {
        if (formulario.form.status == 'VALID') {
            // Captura do conteúdo digitado no campo palavras-chave.
            var chip = document.getElementsByClassName('chip');
            for (let i = 0; i < chip.length; i++) {
                // Sempre concatenando as palavras com ';' para posterior tokenização.
                this.palavras += chip[i].textContent.toString().replace('close', '').toLowerCase() + ';';
            }

            // Preenchimento dos elementos do formData
            formData.append('titulo', formulario.form.value.titulo);
            formData.append('resumo', formulario.form.value.abstract);
            formData.append('keywords', this.palavras);

            // Obtém usuário logado
            this.user$ = this.userService.getUser();

            //Pega os valores do observable e atribui o valor ao campo do formulário.
            this.user$.subscribe(user => {
                formData.append('email', user.sub);
            });

            // Chamada ao service POST
            this.submissoesService.save('submissoes', formData).
                subscribe(res => {
                    formulario.reset();
                    $("#sucess").append("Submissão efetuada com sucesso. Seus arquivos serão processados em até 24 horas.");
                    document.getElementById("success").hidden = false;
                }, err => {
                    this.show = false;
                    this.showValidations = true;
                    this.mensagemValidacao = err;
                });
        }



    }

}
