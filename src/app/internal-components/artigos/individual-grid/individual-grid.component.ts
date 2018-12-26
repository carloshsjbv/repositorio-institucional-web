import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicacoesService } from '../artigos.service';
import { FileDetector } from 'protractor';
import { Artigo } from './artigo';

@Component({
  selector: 'app-individual-grid',
  templateUrl: './individual-grid.component.html',
  styleUrls: ['./individual-grid.component.css']
})
export class IndividualGridComponent implements OnInit {
  
  submissao;

  constructor(
    private activatedRoute: ActivatedRoute,
    private publicacoesService: PublicacoesService
  ) { }

  ngOnInit() {
    return this.publicacoesService.findById(this.activatedRoute.snapshot.params.id)
      .subscribe(res => {
        this.submissao = <Artigo>res;
      });
  }

}
