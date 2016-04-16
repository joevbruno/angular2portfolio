import { Component } from 'angular2/core';

@Component({
  selector: 'modal-content',
  styles: [require('./modal.css')],
  template: `
    <div class="p2 z2 bg-white modal relative">
      <ng-content></ng-content>
    </div>
  `
})
export class ModalContent {};
