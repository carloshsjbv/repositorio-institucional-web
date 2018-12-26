import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TurmasFormComponent } from './turmas-form/turmas-form.component';
import { TurmasListComponent } from './turmas-list/turmas-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [TurmasFormComponent, TurmasListComponent]
})
export class TurmasModule { }
