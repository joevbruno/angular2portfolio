import {
  Component,
  ViewEncapsulation,
  Inject,
  ApplicationRef
} from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { bindActionCreators } from 'redux';

import * as SessionActions from '../../actions/session';
import {loginUser, logoutUser} from '../../actions/session';

import { RioAboutPage } from '../about-page';
import { RioCounterPage } from '../counter-page';

import {
  Button,
  Navigator,
  NavigatorItem
} from '../../components';

@Component({
  selector: 'app',
  directives: [
    ROUTER_DIRECTIVES, Navigator, NavigatorItem,
    Button
  ],
  // Global styles imported in the app component.
  encapsulation: ViewEncapsulation.None,
  styles: [require('../../styles/index.css')],
  template: require('./layout.html')
})
@RouteConfig([
  {
    path: '/counter',
    name: 'Counter',
    component: RioCounterPage,
    useAsDefault: true
  },
  {
    path: '/about',
    name: 'About',
    component: RioAboutPage
  }
])
export class App {
  private disconnect: Function;
  private unsubscribe: Function;
  private isLoggedIn: Boolean;
  private session: any;

  constructor(
    @Inject('ngRedux') private ngRedux,
    private applicationRef: ApplicationRef) {
  }

  ngOnInit() {
    this.disconnect = this.ngRedux.connect(
      this.mapStateToThis,
      this.mapDispatchToThis)(this);

    this.unsubscribe = this.ngRedux.subscribe(() => {
      this.applicationRef.tick();
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
    this.disconnect();
  }

  mapStateToThis(state) {
    return {
      session: state.session,
      isLoggedIn: state.session.get('token', false)
    };
  }

  mapDispatchToThis(dispatch) {
    return {
      login: (credentials) => dispatch(loginUser(credentials)),
      logout: () => dispatch(logoutUser())
    };
  }
};
