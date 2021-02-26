import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Controlled from './controlled';
import Uncontrolled from './uncontrolled';

ReactDOM.render( <div>
    <p><i><b>Controlled Component</b></i></p>
    <Controlled />
    <p><i><b>Uncontrolled Component</b></i></p>
    <Uncontrolled />
    </div>,

  document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
