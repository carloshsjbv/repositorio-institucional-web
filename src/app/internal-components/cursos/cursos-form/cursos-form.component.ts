import { Component } from '@angular/core';

import { CursosService } from '../cursos.service';
import { Cursos } from '../cursos';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent {

  private cursos: Cursos[] = [];
  show: boolean;

  // Possui um service no construtor para possibilitar o acesso REST aos recursos do back-end
  constructor(
    private cursosService: CursosService
  ) { }

  onSubmit(formulario) {
    // Validação
    if (formulario.form.status === 'INVALID') {
      // Mostra mensagem 
      document.getElementById("formValidations").hidden = false;
      $("#formValidations").append("Campos preenchidos incorretamente.");
      $("#formValidations").focus();
    } else {
      // Esconde mensagem
      document.getElementById("formValidations").hidden = true;

      // Salva curso no service
      this.cursosService.saveCursos(formulario.form.value)
        .subscribe(resposta => {

          formulario.form.reset();
          $("#sucess").append("Curso " + formulario.form.value.nome + " cadastrado com sucesso");
          document.getElementById("success").hidden = false;

        }, (error: any) => {
          this.show = false;
          // Tratamento de erros
          if (error.status === 403) {
            $("#formValidations").append("Você não tem permissão para cadastrar.");
          } else if (error.status === 500) {
            $("#formValidations").append("Houveram problemas ao cadastrar.");
          } else {
            $("#formValidations").append("Houveram problemas ao conectar com o servidor.");
          }

        });
    }
  }


}
