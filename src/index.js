import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Roboto,
      Segoe UI, Helvetica Neue, sans-serif;
  }
  h1 {
    font-size: 3.75em;
    font-weight: 500;
    margin-bottom: 0.25em;
  }
  h2 {
    font-size: 2.25em;
    font-weight: 300;
    letter-spacing: 1.25px;
    margin-top: 0;
    margin-bottom: 0.7em;
  }


`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
