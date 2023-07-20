import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import { ToastContainer} from 'react-toastify';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Provider store={store}>

    <BrowserRouter>


      <App />
      <ToastContainer/>

    </BrowserRouter>
  </Provider>
    
 
);



