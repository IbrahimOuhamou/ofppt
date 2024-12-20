// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

import { createStore } from 'redux';

const initialState = {
  solde: 0,
};

// actions
// const action1 = {type: "bismi_allah"};

// reducer
function reducer(state=initialState, action) {
  if(action.type === "depot") {
    return {
      ...state,
      solde: state.solde + action.montant,
    }
  }

  if(action.type === "retrait") {
    return {
      ...state,
      solde: (state.solde - action.montant),
    }
  }

  return state;
}

export const store = createStore(reducer);

