import React, { useEffect, useState } from "react";
import { getMenuList } from "../util/api/menu";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "../atom/login";
import MenuCard from "./MenuCard";
import { menuState } from "../atom/menu";

export default function MenuManage() {
  const [menu, setMenu] = useRecoilState(menuState);

  const [mounted, setMounted] = useState(false); // 로딩중 상태 표현

  const loginInfo = useRecoilValue(loginState); // 리코일 사용해서
  // 전역상태의 로그인 정보를 가져오기

  useEffect(() => {
    if (loginInfo.id) {
      getMenuList(loginInfo.id).then((data) => {
        setMenu(data);
        setMounted(true);
      });
    }
  }, [loginInfo, setMenu]);

  useEffect(() => {
    setMenu((prev) => [
      ...prev,
      {
        number: "4",
        time: "2022-08-03 13:34",
        menus: "콰트로치즈X 1, 기네스콰트로치즈와퍼 1",
        price: "7000",
        status: true,
      },
    ]);
  }, [setMenu]);

  return (
    <div className="menuTable">
      <div>
        {menu.map((item) => {
          return <MenuCard key={item.number} menuinfo={item} />;
        })}
      </div>
    </div>
  );
}
