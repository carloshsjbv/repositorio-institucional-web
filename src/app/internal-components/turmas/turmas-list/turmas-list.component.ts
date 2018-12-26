import { Component, OnInit } from '@angular/core';
import { TurmasService } from '../turmas.service';
import { Turmas } from '../turmas';

@Component({
  selector: 'app-turmas-list',
  templateUrl: './turmas-list.component.html',
  styleUrls: ['./turmas-list.component.css']
})
export class TurmasListComponent implements OnInit
{

  turmas: Turmas[] = [];

  constructor(private turmasSerice: TurmasService) { }

  ngOnInit()
  {

    this.turmasSerice.
      listForModel('turmas').
      subscribe(turmas =>
      {
        this.turmas = turmas
      }, (error: any) =>
        {
          if (error.status == 403)
          {
            window.location.href = "http://repositorio-institucional.herokuapp.com/login";
          }
        }
      );


  }

}
