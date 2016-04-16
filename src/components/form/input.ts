import { Component, Input } from 'angular2/core';
import { NgFormControl } from 'angular2/common';

@Component({
  selector: 'input',
  directives: [ NgFormControl ],
  template: `
    <input
      [type]="inputType"
      class="block col-12 mb1 input"
      [attr.placeholder]="placeholder"
      [ngFormControl]="formControl"
    />
  `
})
export class CustomInput {
  @Input() inputType = 'text';
  @Input() placeholder = '';
  @Input() formControl: NgFormControl;
};
