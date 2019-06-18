import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';

const reducer=(state={list:[]},action={})=>{
    switch (action.type){
        case 'ADD_TODO':
            const newState=Object.assign({},state);
            newState.list.push(action.payload);
            return newState;
        default:
            return state;
    }
}
const store=createStore(reducer,{list:[]});
// const state=store.getState();
function render() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}
renderPage();

store.subscribe(renderPage);
serviceWorker.unregister();
