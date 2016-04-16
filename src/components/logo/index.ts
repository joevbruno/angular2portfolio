import { Component } from 'angular2/core';

@Component({
  selector: 'logo',
  styles: [require('./logo.css')],
  template: `
    <div className="flex items-center">
      <img
        class="logo"
        [src]="LogoImage"
        alt="Rangle.io"
      />
    </div>
  `
})
export class Logo {
  private LogoImage = require('../../assets/rangleio-logo.svg');
};
