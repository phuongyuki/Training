import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Head/Header'
//import FormInput from './Body/Form-demo'
import FormInput2 from './Body/Form(usestate)-demo'
// import Logo from './Logo'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        {/* <FormInput /> */}
        <FormInput2 />
    </React.StrictMode>,
  document.getElementById('root')
);