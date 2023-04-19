import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ThinkAloud from './ThinkAloud/ThinkAloud.js';
import { Provider } from 'react-redux';
import cssImports from './imports.module.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { isJson, isValidURL, isObject, getServerUrl} from './util.js';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { message } from 'antd';
import reducers from './reducers';
import { listeners } from './middleware/api';
import { logging } from './middleware/logging';
import reduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import 'antd/es/message/style/index.css';
import 'antd/es/button/style/index.css';
import 'antd/es/progress/style/index.css';


const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Adds current script information to ta object
window.thinkAloud.currentScript = window.document.currentScript;

window.thinkAloud.serverUrl = getServerUrl(window.thinkAloud.currentScript.src);

if(process.env.NODE_ENV !== "development" && window.thinkAloud.serverUrl){
  var link = document.createElement("link");
  link.href = window.thinkAloud.serverUrl + "/code/ThinkAloud.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";
  window.document.getElementsByTagName( "head" )[0].appendChild(link);
}else if(process.env.NODE_ENV === "development"){
  var style =  document.createElement("link");
  style.appendChild(document.createTextNode(cssImports));
  window.document.getElementsByTagName( "head" )[0].appendChild(style);
}

window.thinkAloud.renderThinkAloud = async function(id, data, params = {}){
  let taData;
  if(!id || !data){
    console.log("Missing parameter: renderThinkAloud requires DOM id and config")
    return
  }

  if(typeof data === 'string' && isValidURL(data)){
    try{
      const res = await axios.get(data);
      taData = res.data;
    }catch(e){
      message.error(e.message);
      console.log(e);
    }
  } else if(typeof data === 'string'){
    taData = isJson(data);
  }else if(isObject(data)){
    taData = data;
  }

  if(!taData){
    console.log("Error, config data not provided or invalid");
    return;
  }

  const domTarget = document.getElementById(id);

  if(!domTarget){
    console.log("Error, target element not found to render the table");
    return;
  }

  window.thinkAloud.domTarget = domTarget;

  //Add uuid if no user
  if(!params.name)
    params.name = uuidv4();

  const middleware = params.logging === true ?  [reduxThunk, logging, listeners] : [reduxThunk, listeners] ;
  
  const store = process.env.NODE_ENV === 'development' 
      ? createStore(reducers, {params}, reduxDevTools(applyMiddleware(...middleware)))
      : createStore(reducers, {params}, applyMiddleware(...middleware));

  ReactDOM.render(
    <Provider store={store}>
        <ThinkAloud data={taData} />
    </Provider>
    , document.getElementById(id)
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
