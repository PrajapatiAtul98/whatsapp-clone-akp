
import React from "react";
//import ReactDOM from "react-dom";
import App from "./component/App";
import { createRoot } from 'react-dom/client';
import { StateProvider } from "./component/StateProvider";
import reducer, { initialState } from './component/reudcer';
const root = createRoot(document.getElementById('root'));
root.render(
    
    <StateProvider initialState={initialState} reducer={reducer} >
         <App />
    </StateProvider>
  
);


