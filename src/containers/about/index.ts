import { Component } from 'angular2/core';
import { Container } from '../../components';

@Component({
  selector: 'about-page',
  directives: [ Container ],
  template: require('./about.html')
})
export default class AboutPage {}
