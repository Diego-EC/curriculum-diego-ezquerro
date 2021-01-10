import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/views/app';
import Layout from "./layout";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

