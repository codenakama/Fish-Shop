import * as types from "./actionTypes";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  fishForSale: ["american_crayfish",
  "barreleye",
  "batfish",
  "battered_cod",
  "betta_splendens",
  "bonnethead",
  "cichlids",
  "cleaner_shrimp",
  "cocoa_damselfish",
  "coelocanth",
  "cookiecutter",
  "cuttlefish",
  "damselfish",
  "dragon_wrasse",
  "electrophorus",
  "elephant_seal",
  "elvers",
  "fanfin_seadevil",
  "fish_fingers",
  "french_angel_fish",
  "hammerhead",
  "harlequin_shrimp",
  "hawksbill_turtle",
  "megalodon",
  "minnow",
  "neon_tetra",
  "oarfish",
  "painted_lobster",
  "prawn_cocktail",
  "psychedelic_frogfish",
  "robocod",
  "salmon_shark",
  "sand_eel",
  "sea_lion",
  "shortfin_mako_shark",
  "slipper_lobster",
  "sockeye_salmon",
  "spanish_hogfish",
  "spinner_dolphin",
  "stauroteuthis",
  "stingray",
  "sunstar",
  "symphysodon",
  "torquigener"],
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
