import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import axios from "axios"

const getApi = async callBack => {
  await axios("https://dev-example.sanbercloud.com/api/job-vacancy")
  .then(response => response.data.data)
}

const initialState = {
  dataApi : []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "getApi":
      return {
        ...state,
        dataApi: action.data,
        dataSearch: []
      }
      
     break;
     
    case "getSearch":
    const dataSearchFilter = state.dataApi.filter(i =>  i.title.includes(action.data))
      action.callBack(dataSearchFilter)
      
     return {
       ...state,
     }
      break;
      
      default:
       return state
  }
}
const dataStore = createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
     <Provider store={dataStore}>
      <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
