import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './Reducers'

import Counter from './Counter';
import CounterView from './CounterView';

import './App.css';

const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={store}> 
      <div>Hello React!</div>
      <CounterView />
      <Counter />
    </Provider>
  )
};

export default App;
