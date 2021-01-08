import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/views/app';
import Layout from "./layout";
import './index.css';
import Navbar from './js/components/bootstrap/navbar';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

