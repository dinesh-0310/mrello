import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from './Redux/store'
import { ThemeContextProvider } from './ThemeContextProvider';

ReactDOM.render(
    <ThemeContextProvider>
  <Provider store={store}>
    <App />
  </Provider>
    </ThemeContextProvider>,
  document.getElementById('root')
);

