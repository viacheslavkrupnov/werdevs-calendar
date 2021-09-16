import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import App from './App';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import store from './store';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
