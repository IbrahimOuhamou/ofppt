// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

import {createStore}from 'redux'

const initialstate = [];

function reducer(state=initialstate,action){
    if(action.type==="ADD_NOTE"){
        return [...state,{title: action.titre,text: action.contenu}]
    }
    if (action.type==="REMOVE_NOTE"){
        return state.filter(x=>x.title!==action.title);
    }
    return state;
}

export const store = createStore(reducer);
