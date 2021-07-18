import React from 'react';
import { Provider } from 'react-redux';
import Main from './components/layout/Main';
import store from './store';

const App = () => {
  return (
    <Provider store={ store }>
      <Main></Main>
    </Provider>
  )
}

export default App
