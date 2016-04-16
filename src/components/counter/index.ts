import { Component, Input } from 'angular2/core';
import { Button } from '../button';

@Component({
  selector: 'counter',
  template: `
    <div class="flex">
      <button
        className="bg-black col-2"
        (onClick)="decrement()">
        -
      </button>

      <div class="flex-auto flex-center center h1">
        {{ counter }}
      </div>

      <button className="col-2"
        (onClick)="increment()">
        +
      </button>
    </div>
  `,
  directives: [Button]
})
export class Counter {
  @Input() counter: number;
  @Input() increment: () => void;
  @Input() decrement: () => void;
};
