/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import * as serviceWorker from "./serviceWorker";
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './store';
// import favicon from './assets/img/favicon.jpg';
import Main from './Main';


const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  });

  let loader = null;
  if (loading == false) {
    loader = (
      <div>
        <Helmet>
          {/* <link rel="shortcut icon" type="image/x-icon" href={favicon} /> */}
          {/* <link href={favicon} rel="icon" type="shortcut icon" /> */}
        </Helmet>
        <Provider store={store}>
          <Router>
            <Main />
          </Router>
        </Provider>
      </div>
    );
  }
  return loader;
};

ReactDOM.render(<App />, document.getElementById('SLM'));

serviceWorker.unregister();
