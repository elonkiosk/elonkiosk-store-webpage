import React, { useEffect, useState } from "react";
import { getMenuList } from "../util/api/menu";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "../atom/login";
import MenuCard from "./MenuCard";
import { menuState } from "../atom/menu";
import AddButton from "./AddButton";

export default function MenuManage() {
  const [menu, setMenu] = useRecoilState(menuState);

  const [mounted, setMounted] = useState(false); // 로딩중 상태 표현
  console.log(mounted); // 임시 주의제거용

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

  return (
    <>
      <AddButton />
      <div className="menuTable">
        <div>
          {menu.map((item) => {
            return <MenuCard key={item.number} menuinfo={item} />;
          })}
        </div>
      </div>
    </>
  );
}
