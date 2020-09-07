import React from 'react';
import { AppRouter } from './components/routerContainer/routes';
import { Provider } from 'react-redux';
import { store } from './helpers';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
