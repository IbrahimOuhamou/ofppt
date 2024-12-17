// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

import { createStore } from 'redux'
// state
const initialState = {
  player1: 0,
  player2: 0,
  advantage: null,
  winner: null,
  playing: true,
};

//action creators
export const playPause = () => {{ type: "playPause" }};
export const restartGame = () => {{ type: "restart" }};

export const pointScord = (player) => ({
  type: "pointScored",
  payload: { player: player }
});

function reducer(state = initialState, action) {
  if (action.type === "restart") {
    return initialState;
  }
  if (action.type == "playPause") {
    return {
      ...state,
      playing: !state.playing,
    }
  }
}

