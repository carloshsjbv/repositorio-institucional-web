import { Component, OnInit } from '@angular/core';

import { TurmasService } from '../../turmas/turmas.service';
import { Turmas } from '../../turmas/turmas';
import { AlunosService } from '../alunos.service';
import { CursosService } from '../../cursos/cursos.service';
import { Cursos } from '../../cursos/cursos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  alunoForm: FormGroup;
  turmas: Turmas[] = [];
  cursos: Cursos[] = [];
  message: boolean = true;
  show: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private turmasService: TurmasService,
    private cursosService: CursosService,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.cursosService.listForModel('cursos')
      .subscribe(resultado => {
        this.cursos = resultado
      });
    this.alunoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      ra: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      curso: ['', Validators.required],
      turma: ['', Validators.required]
    })
  }

  listaTurmas(event) {
    this.message = true;
    this.turmasService.listByTurmaByCursoId('turmas/curso/', event.target.value)
      .subscribe(res => {
        res.length > 0 ? this.turmas = res : this.message = false
      });
  }

  onSubmit() {
    //Validação
    if (this.alunoForm.status === 'INVALID') {
      // Mostra mensagem 
      document.getElementById("formValidations").hidden = false;
      document.getElementById("formValidations").innerHTML = "Campos preenchidos incorretamente.";
      document.getElementById("formValidations").focus();
    } else {
      // Esconde mensagem
      this.alunosService.save('alunos', this.alunoForm.value)
        .subscribe(resultado => {
          document.getElementById("sucess").innerHTML = "Aluno " + this.alunoForm.value.nome + " cadastrado com sucesso";
          document.getElementById("sucess").hidden = false;
          this.alunoForm.reset();
        },
          (error: any) => {
            this.show=true;
            document.getElementById("formValidations").hidden = false;
            if (error.message.includes('ConstraintViolationException')) {
              document.getElementById("formValidations").innerHTML = "Houve violação de constraints no processo de criação.";
            } else if (error.error.status = 500) {
              document.getElementById("formValidations").innerHTML = "Houveram problemas ao salvar. Status: " + error.error.status + " Mensagem: " + error.error.message;
            } else {
              document.getElementById("formValidations").innerHTML = "Problemas ao conectar com o servidor.";
            }
          }
        )
    };
  }
}
