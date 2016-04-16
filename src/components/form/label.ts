import { Component } from 'angular2/core';

@Component({
  selector: 'label',
  template: `
    <label>
      <ng-content></ng-content>
    </label>
  `
})
export class Label {};
