import { Component } from 'angular2/core';

@Component({
  selector: 'form-group',
  template: `
    <div class="py2">
      <ng-content></ng-content>
    </div>
  `
})
export class FormGroup {};
