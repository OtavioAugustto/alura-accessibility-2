import { CommonModule } from '@angular/common';
import { FocusBackDirective } from './focus-back.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FocusBackDirective],
  imports: [CommonModule],
  exports: [FocusBackDirective],
})
export class FocusBackModule {}
