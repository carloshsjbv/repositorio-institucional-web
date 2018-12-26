import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

import { SubmissoesComponent } from './submissoes.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SubmissoesComponent
  ],
  exports: [
    SubmissoesComponent,
  ]

})
export class SubmissoesModule { }
