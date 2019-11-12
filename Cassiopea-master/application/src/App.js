import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './Router';
import reducers from './reducers';

class App extends Component {

  render() {
    return (
      /*Gestion de la navigation avec le ROUTER */
      <Provider store={createStore(reducers)}>
        <Router />
      </Provider>
    );
  }
}


export default App;
