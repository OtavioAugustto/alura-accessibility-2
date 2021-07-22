import { ModalService } from './services/modal.service';
import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule],
  exports: [ModalComponent],
  providers:[ModalService]
})
export class ModalModule {}
