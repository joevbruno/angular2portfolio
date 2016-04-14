import { Component } from 'angular2/core';

@Component({
    selector: 'app',
    template: `<div><h1>{{pageTitle}} In app Component</h1></div>`,
})
export class AppComponent {
    pageTitle: string = 'My Portfolio';
}
