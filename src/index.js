import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OrderPage from './order/OrderPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrderPage />
  </React.StrictMode>
);
