import { Input, Component } from 'angular2/core';

@Component({
  selector: 'navigator-item',
  template: `
    <div
      class="truncate"
      [ngClass]="{
        mr2: mr,
        ml2: ml
      }">
      <ng-content></ng-content>
    </div>
  `
})
export class NavigatorItem {
  @Input() mr = false;
  @Input() ml = false;
};
