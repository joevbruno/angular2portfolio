import { Component, Input } from 'angular2/core';

@Component({
  selector: 'alert',
  template: `
    <div class="p2 bold"
      [ngClass]="{
        'bg-blue': status === 'info',
        'bg-yellow': status === 'warning',
        'bg-green': status === 'success',
        'bg-red': status === 'error',
        'white': status === 'info' || status === 'error'
      }">
      <ng-content></ng-content>
    </div>
  `
})
export class Alert {
  @Input() status = 'info';
};
