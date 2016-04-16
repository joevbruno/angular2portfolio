import { Component, EventEmitter, Input, Output } from 'angular2/core';

import { Modal, ModalContent } from '../modal';
import { LoginForm } from './login-form';

@Component({
  selector: 'login-modal',
  directives: [Modal, ModalContent, LoginForm],
  template: `
    <modal>
      <modal-content>
        <h1 class='mt0'>Login</h1>
        <login-form
          [isPending]="isPending"
          [hasError]="hasError"
          (onSubmit)="handleSubmit($event)"></login-form>
      </modal-content>
    </modal>
  `
})
export class LoginModal {
  @Input() isPending: boolean;
  @Input() hasError: boolean;
  @Output() onSubmit: EventEmitter<Object> = new EventEmitter();

  handleSubmit(login) {
    this.onSubmit.emit(login);
  }
};
