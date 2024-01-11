import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';

import RoutesComponent from './routes/RoutesComponent';
import store, { persistor } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <RoutesComponent />
          <ToastContainer autoClose={5000} position="bottom-right" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
