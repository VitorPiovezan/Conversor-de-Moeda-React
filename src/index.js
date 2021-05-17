import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Conversor from './components/Conversor';
import reportWebVitals from './reportWebVitals';
import { Container } from './components/styles';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Conversor moedaA='USD' moedaB='BRL' />
      <Conversor moedaA='BRL' moedaB='USD' />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
