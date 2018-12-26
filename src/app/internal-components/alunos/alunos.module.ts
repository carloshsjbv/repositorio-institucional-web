import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { VMessagesModule } from 'src/app/core/shared/vmessages.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessagesModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AlunosFormComponent
  ],
  exports: [
    AlunosFormComponent
  ]
})
export class AlunosModule { }
