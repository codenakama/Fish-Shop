import * as types from "./actionTypes";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  fish: ["american_crayfish", "barreleye", "batfish"]
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// selectors

export function getFish(state) {
  return state.tank.fish;
}
