import { atom } from "recoil";

export const storeState = atom({
  key: "store", // unique ID (with respect to other atoms/selectors)
  default: {
    id: "",
  }, // default value (aka initial value)
});
