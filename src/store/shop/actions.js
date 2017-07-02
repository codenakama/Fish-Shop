import * as types from "./actionTypes";
import shopService from "../../services/shopService";

export function addFishToBasket(fish) {
  return async (dispatch, getState) => {
    try {
      const response = await shopService.checkCompatibility();
      dispatch({ type: types.COMPATIBLE, fish });
    } catch (error) {
      console.error(error);
    }
  };
}
