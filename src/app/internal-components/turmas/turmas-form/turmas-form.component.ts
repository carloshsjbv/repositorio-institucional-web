import { Component, OnInit } from '@angular/core';

import { CursosService } from '../../cursos/cursos.service';
import { Cursos } from '../../cursos/cursos';
import { TurmasService } from '../turmas.service';
import { Turmas } from '../turmas';

@Component({
    selector: 'app-turmas-form',
    templateUrl: './turmas-form.component.html',
    styleUrls: ['./turmas-form.component.css']
})
export class TurmasFormComponent implements OnInit {
    cursos: Cursos[] = [];
    show: boolean;

    constructor(
        private cursosService: CursosService,
        private turmasService: TurmasService
    ) { }

    ngOnInit() {
        this.cursosService.listForModel('cursos').
            subscribe(cursos => {
                this.cursos = cursos
            }
            );

    }

    onSubmit(novaTurma) {

        var val: boolean = TurmasFormComponent.viewValidation(novaTurma);

        if (!val && novaTurma.form.status != 'INVALID') {
            document.getElementById("formValidations").hidden = true;
            novaTurma.form.value.anoInicial = parseInt(novaTurma.form.value.anoInicial.toString().substring(0, 4));
            // Salva turmas no service
            this.turmasService.saveTurmas('turmas', novaTurma.form.value)
                .subscribe(resposta => {
                    document.getElementById("sucess").innerHTML = "Turma cadastrada com sucesso";
                    document.getElementById("sucess").hidden = false;
                    novaTurma.form.reset();
                });
            (error: any) => {
                this.show = false;
                document.getElementById("formValidations").innerHTML = "Houveram problemas ao cadastrar.";
            }
        }
    }

    static viewValidation(turmaForm): boolean {
        var valor: boolean = false;

        if (turmaForm.value.anoInicial == null) {
            document.getElementById("anoInicialValidation").hidden = false;
            document.getElementById("anoInicialValidation").innerHTML = "Ano inválido";
            valor = true;
        } else {
            document.getElementById("anoInicialValidation").hidden = true;
        }
        if (turmaForm.value.curso == null || turmaForm.value.curso == '') {
            document.getElementById("anoInicialValidation").hidden = false;
            document.getElementById("anoInicialValidation").innerHTML = "Ano inválido";
            valor = true;
        } else {
            document.getElementById("anoInicialValidation").hidden = true;
        }

        return valor;
    }

}
