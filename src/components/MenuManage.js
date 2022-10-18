import React, { useEffect, useState } from "react";
import { getMenuList } from "../util/api/menu";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "../atom/login";
import MenuCard from "./MenuCard";
import { menuState } from "../atom/menu";
import AddButton from "./AddButton";
import { Navigate } from "react-router-dom";
import { alertState } from "../atom/alert";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function MenuManage() {
  const [menu, setMenu] = useRecoilState(menuState);

  const [mounted, setMounted] = useState(false); // 로딩중 상태 표현
  console.log(mounted); // 임시 주의제거용

  const loginInfo = useRecoilValue(loginState); // 리코일 사용해서
  // 전역상태의 로그인 정보를 가져오기

  // 엘럿창
  const [isAlertInitial, setAlert] = useRecoilState(alertState);
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
  });

  const MySwal = withReactContent(Toast);

  useEffect(() => {
    if (loginInfo.id) {
      getMenuList(loginInfo.id).then((data) => {
        setMenu(data);
        setMounted(true);
      });
    } else {
      setAlert(false);
      MySwal.fire({
        icon: "error",
        title: "로그인이 필요한 서비스 입니다.",
      });
    }
  }, [MySwal, isAlertInitial, setAlert, loginInfo, setMenu]);

  return loginInfo.id ? (
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
  ) : (
    <Navigate to="/login" />
  );
}
