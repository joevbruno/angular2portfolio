import { Component, Inject, ApplicationRef } from 'angular2/core';
import { bindActionCreators } from 'redux';

import * as CounterActions from '../../actions/counter';
import { Container, Counter } from '../../components';

@Component({
  selector: 'counter-page',
  directives: [ Container, Counter ],
  template: require('./counter.html')
})
export default class CounterPage {
  private disconnect: Function;
  private unsubscribe: Function;

  constructor(
    @Inject('ngRedux') private ngRedux,
    private applicationRef: ApplicationRef) {}

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
      counter: state.counter.get('count')
    };
  }

  mapDispatchToThis(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
  }
}
