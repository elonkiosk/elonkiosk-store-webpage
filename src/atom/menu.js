import { atom } from "recoil";

export const menuState = atom({
  key: "menuList",
  default: [
    {
      number: "1",
      time: "2022-08-03 12:45",
      menus: "기네스머쉬룸와퍼 1, 기네스와퍼 1",
      price: "7500",
      status: false,
    },
    {
      number: "2",
      time: "2022-08-03 13:21",
      menus: "기네스콰트로치즈와퍼 1",
      price: "3000",
      status: false,
    },
    {
      number: "3",
      time: "2022-08-03 13:23",
      menus: "통새우X 2",
      price: "7000",
      status: false,
    },
  ],
});
