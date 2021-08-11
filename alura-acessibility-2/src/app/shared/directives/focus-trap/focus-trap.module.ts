import { CommonModule } from '@angular/common';
import { FocusTrapDirective } from './focus-trap.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FocusTrapDirective],
  imports: [CommonModule],
  exports: [FocusTrapDirective],
})
export class FocusTrapModule {}
