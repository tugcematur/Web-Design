// import React,{useState} from 'react'; //çok geniş özelliği olan bir modülün tek bir özelliğini import edeceksek {} içinde yazarız,herhangi bir metodu kullanacaksak import etmeliyi< her zmaan
import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './components/Test';  //default  export
import {abc} from './components/Test';         
import reportWebVitals from './reportWebVitals';
// import Button from './classComponent';
import  Renderlist from './App.js';
//functionlar otomatik olarak component olur
//abc = abc+ 3
ReactDOM.render( <Renderlist/>,document.getElementById('root')); /* Sayfayı App fonk ile  oluştur  */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
