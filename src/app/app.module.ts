import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './core/app.routing';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { ErrorsModule } from './errors/errors.module';

import { CursosModule } from './internal-components/cursos/cursos.module';
import { TurmasModule } from './internal-components/turmas/turmas.module';
import { AlunosModule } from './internal-components/alunos/alunos.module';
import { SubmissoesModule } from './internal-components/submissoes/submissoes.module';
import { ArtigosComponent } from './internal-components/artigos/general-grid/artigos.component';
import { IndividualGridComponent } from './internal-components/artigos/individual-grid/individual-grid.component';
import { SafePipeModule } from './core/safety/safe-pipe/safe-pipe.module';
import { Safe } from './core/safety/safe-pipe/safe-pipe.pipe';

@NgModule({
  // Componentes, diretivas que serão utilizadas
  declarations: [
    AppComponent,
    HomeComponent,
    ArtigosComponent,
    IndividualGridComponent
  ],
  // Módulos que serão utilizados
  imports: [
    BrowserModule, // Carregamento de todas as diretivas
    CoreModule,
    HomeModule,
    CursosModule,
    TurmasModule,
    AlunosModule,
    ErrorsModule,
    SubmissoesModule,
    MaterializeModule,
    routing,
    SafePipeModule
  ],
  // Serviços que serão utilizados
  providers: [Safe],
  // Fica somente no módulo raiz, e indica qual será o container do projeto angular.
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
