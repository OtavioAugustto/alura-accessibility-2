import { Component } from '@angular/core';
import { ModalConfig } from './interfaces/modal-config';

@Component({
  selector: 'app-modal',
  template: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  public config: ModalConfig;
}
