import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ModalContextProvider } from './context/modal/index';

ReactDOM.render(
  <ModalContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ModalContextProvider>,
  document.getElementById('root'),
);
