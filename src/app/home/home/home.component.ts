import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/internal-components/alunos/alunos.service';
import { SubmissoesService } from 'src/app/internal-components/submissoes/submissoes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private alunosService: AlunosService,
    private submissoesService: SubmissoesService
  ) { }

  alunos = 0;
  artigos = 0;

  ngOnInit() {
    this.alunosService.countAll()
    .subscribe(res => {
      this.alunos = <number> res;
    })

    this.submissoesService.countAll()
    .subscribe(res => {
      this.artigos = <number> res;
    })
  }

}
