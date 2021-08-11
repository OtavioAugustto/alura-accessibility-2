import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = 'Otávio';
  public modalRef: ModalRef;
  public info = false;
  public form: FormGroup;
  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Otávio', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false],
    });
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return
    }
    console.log(this.form.value);
    this.modalRef.close();
  }
}
