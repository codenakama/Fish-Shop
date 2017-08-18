import * as types from "./actionTypes";
import shopService from "../../services/shopService";

export function addFishToBasket(fish) {
  return async (dispatch, getState) => {
    try {
      const isCompat = await shopService.checkCompatibility();
      if (isCompat) dispatch({ type: types.COMPATIBLE, fish });
      else dispatch({ type: types.NOT_COMPATIBLE, fish });
    } catch (error) {
      console.error(error);
      dispatch({ type: types.SHOP_FLOADED });
    }
  };
}

export function buyFish() {
  return async (dispatch, getstate) => {
    try {
    } catch (error) {}
  };
}
