import React from 'react';
import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App store={store}/>);