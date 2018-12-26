import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from '../home/home/home.component';
import { CursosListComponent } from '../internal-components/cursos/cursos-list/cursos-list.component';
import { CursosFormComponent } from '../internal-components/cursos/cursos-form/cursos-form.component';
import { NotFoundComponent } from '../errors/not-found/not-found.component';
import { TurmasListComponent } from '../internal-components/turmas/turmas-list/turmas-list.component';
import { TurmasFormComponent } from '../internal-components/turmas/turmas-form/turmas-form.component';
import { CursosTurmasComponent } from '../internal-components/cursos/cursos-turmas/cursos-turmas.component';
import { SubmissoesComponent } from '../internal-components/submissoes/submissoes.component';
import { AlunosFormComponent } from '../internal-components/alunos/alunos-form/alunos-form.component';
import { SignInComponent } from '../home/singin/signin.component';
import { ArtigosComponent } from '../internal-components/artigos/general-grid/artigos.component';
import { IndividualGridComponent } from '../internal-components/artigos/individual-grid/individual-grid.component';

// Rotas do projeto
const APP_ROUTES: Routes = [
    
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: SignInComponent },
    { path: 'cursos', component: CursosListComponent },
    { path: 'turmas', component: TurmasListComponent },
    { path: 'artigos', component: ArtigosComponent },
    { path: 'artigos/:curso', component: ArtigosComponent },
    { path: 'artigos/:curso/:anoInicial', component: ArtigosComponent },
    { path: 'artigos/:curso/:anoInicial/:id', component: IndividualGridComponent },
    { path: 'cursos/list/:curso', component: CursosTurmasComponent },

    { path: 'cursos/cadastro', component: CursosFormComponent },
    { path: 'turmas/cadastro', component: TurmasFormComponent },
    { path: 'alunos/cadastro', component: AlunosFormComponent },
    { path: 'submissoes/cadastro', component: SubmissoesComponent },
    { path: '**', component: NotFoundComponent },
];

/*
    routing: Constante que contém a definição das rotas do projeto.
    routing é exportada pois é usada no restante do projeto.
    RouterModule chama o método forRoot por que aqui são tratadas as rotas raiz da aplicação.

*/
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);