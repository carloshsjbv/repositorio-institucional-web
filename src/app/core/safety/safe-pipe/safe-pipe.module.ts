import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Safe } from './safe-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Safe
  ],
  exports: [Safe]
})
export class SafePipeModule {

}
