import * as types from "./actionTypes";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  fishForSale: ["hadock", "sardine"],
  fishInBasket: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    // case types.RESOURCES_FETCHED:
    //   return state.merge({
    //     resources: action.resources
    //   });

    default:
      return state;
  }
}

// selectors

export function getFishForSale(state) {
  return state.shop.fishForSale;
}
