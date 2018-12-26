import { Component, OnInit } from '@angular/core';
import { TurmasService } from '../../turmas/turmas.service';
import { ActivatedRoute } from '@angular/router';
import { Turmas } from '../../turmas/turmas';
import { Cursos } from '../cursos';

@Component({
  selector: 'app-cursos-turmas',
  templateUrl: './cursos-turmas.component.html',
  styleUrls: ['./cursos-turmas.component.css']
})
export class CursosTurmasComponent implements OnInit
{

  turmas: Turmas[] = [];
  curso: Cursos;

  constructor(
    private turmasService: TurmasService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void
  {
    // Pega o valor da rota ativada no momemento
    const acronimo = this.activatedRoute.snapshot.params.curso;
    this.turmasService.
      listByTurmaAndYear('cursos/turmas', acronimo).
      subscribe(resultado =>
      {
        this.curso = resultado.length > 0 ? resultado[0].curso : null;
        this.turmas = resultado;
      }, (error: any) =>
        {
          document.getElementById("noPublications").hidden = false;
          document.getElementById("noPublications").innerHTML = "<h3>Houveram problemas ao conectar com o servidor.</h3>"
        });


  }

}
