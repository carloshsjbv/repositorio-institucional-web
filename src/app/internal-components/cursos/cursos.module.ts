import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosTurmasComponent } from './cursos-turmas/cursos-turmas.component';

@NgModule({
    declarations: [
        CursosListComponent,
        CursosFormComponent,
        CursosTurmasComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [
        CursosListComponent,
        CursosFormComponent
    ]
})
export class CursosModule { }
