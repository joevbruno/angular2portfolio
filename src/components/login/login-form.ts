import { Component, EventEmitter, Input, Output } from 'angular2/core';
import {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Control,
  Validators
} from 'angular2/common';

import { Form, FormError, FormGroup, Label } from '../form';
import { Alert } from '../alert';
import { Button } from '../button';
import { CustomInput } from '../form/input';

@Component({
  selector: 'login-form',
  directives: [
    FORM_DIRECTIVES, Alert, Button, Input,
    Form, FormError, FormGroup, Label
  ],
  template: `
    <form
      [ngFormModel]="group"
      (ngSubmit)="handleSubmit()">
      <alert status='info' *ngIf="isPending">Loading...</alert>
      <alert status='error' *ngIf="hasError">
        Invalid username and password
      </alert>

      <form-group>
        <label>Username</label>
        <input
          inputType='text'
          placeholder='Username'
          [formControl]="username"></input>
        <form-error [visible]="showNameWarning()">
          Username required!
        </form-error>
      </form-group>

      <form-group>
        <label>Password</label>
        <input
          inputType='password'
          placeholder='Password'
          [formControl]="password"></input>
        <form-error [visible]="showPasswordWarning()">
          Password required!
        </form-error>
      </form-group>

      <form-group>
        <button
          className="mr1"
          type="submit">
          Login
        </button>
        <button className="bg-red"
          (onClick)="reset()">
          Clear
        </button>
      </form-group>
    </form>
  `
})
export class LoginForm {
  @Input() isPending: boolean;
  @Input() hasError: boolean;
  @Output() onSubmit: EventEmitter<Object> = new EventEmitter();
  private username: Control;
  private password: Control;
  private group: ControlGroup;

  constructor(private builder: FormBuilder) {
    this.reset();
  }

  showNameWarning() {
    return this.username.touched
      && !this.username.valid
      && this.username.hasError('required');
  }

  showPasswordWarning() {
    return this.password.touched
      && !this.password.valid
      && this.password.hasError('required');
  }

  handleSubmit() {
    this.onSubmit.emit(this.group.value);
  }

  reset() {
    this.username = new Control('', Validators.required);
    this.password = new Control('', Validators.required);
    this.hasError = false;
    this.isPending = false;
    this.group = this.builder.group({
      username: this.username,
      password: this.password
    });
  }
};
