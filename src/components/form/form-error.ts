import { Component, Input } from 'angular2/core';

@Component({
  selector: 'form-error',
  template: `
    <div class="bold black" [ngClass]="{ 'display-none': !visible }">
      <ng-content></ng-content>
    </div>
  `
})
export class FormError {
  @Input() visible: boolean;
};
