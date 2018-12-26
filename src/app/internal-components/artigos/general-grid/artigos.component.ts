import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PublicacoesService } from '../artigos.service';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {

  artigos;
  nomeCurso;
  router: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private artigosService: PublicacoesService
  ) { }

  ngOnInit() {
    const path = this.activatedRoute.snapshot.params;

    if (path.curso == undefined) {
      this.artigosService.findArtigos()
        .subscribe(
          resposta => {
            this.artigos = resposta;
          },
          (error) => {
            // Tratamento de erros
            if (error.status === 403) {
              $("#formValidations").append("Você não tem permissão para cadastrar.");
            } else if (error.status === 500) {
              $("#formValidations").append("Houveram problemas ao cadastrar.");
            } else {
              $("#formValidations").append("Houveram problemas ao conectar com o servidor.");
            }

          }
        );
    } else if (path.curso != null || path.curso != null) {

      if (path.anoInicial != null || path.anoInicial != undefined) {
        this.artigosService.findArtigosCursoAno(path.curso, path.anoInicial)
          .subscribe(
            resposta => {
              this.nomeCurso = resposta != null ? resposta[0].aluno.turma.curso.nome : null;
              this.artigos = resposta;
            },
            (error) => {
              // Tratamento de erros
              if (error.status === 403) {
                $("#formValidations").append("Você não tem permissão para cadastrar.");
              } else if (error.status === 500) {
                $("#formValidations").append("Houveram problemas ao cadastrar.");
              } else {
                $("#formValidations").append("Houveram problemas ao conectar com o servidor.");
              }

            }
          );
      } else {
        this.artigosService.findArtigosCurso(path.curso)
          .subscribe(
            resposta => {
              this.nomeCurso = resposta != null ? resposta[0].aluno.turma.curso.nome : null;
              this.artigos = resposta;
            },
            (error) => {

              // Tratamento de erros
              if (error.status === 403) {
                $("#formValidations").append("Você não tem permissão para cadastrar.");
              } else if (error.status === 500) {
                $("#formValidations").append("Houveram problemas ao cadastrar.");
              } else {
                $("#formValidations").append("Houveram problemas ao conectar com o servidor.");
              }

            }
          );
      }
    }
  }

  buscaPorId(id) {

    this.artigosService.findById(id)
      .subscribe(res => {
        this.router.navigateByUrl('/artigo/' + res);
      },
        error => {
          alert("Teste");
        }
      )

  }

}
