import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Cursos } from '../cursos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  show: boolean;
  cursos: Cursos[] = [];

  // Possui um service no construtor para possibilitar o acesso REST aos recursos do back-end
  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // Chamada ao service que disponibiliza a recureração de cursos
    this.cursosService.
      listForModel('cursos').
      subscribe(cursos => {
        this.cursos = cursos
      },
        (error: any) => {
          this.show = false;
          // Tratamento de erros
          if (error.status === 500) {
            $("#formValidations").append("Houveram problemas no servidor.");
          } else {
            $("#formValidations").append("Houveram problemas ao conectar com o servidor.");
          }

        }
      );

  }


}
