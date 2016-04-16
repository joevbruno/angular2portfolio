import { Component } from 'angular2/core';

@Component({
  selector: 'form',
  template: `
    <form>
      <ng-content></ng-content>
    </form>
  `
})
export class Form {};
