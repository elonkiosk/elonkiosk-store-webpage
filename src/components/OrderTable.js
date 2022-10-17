import React, { useEffect, useState } from "react";
import { getOrderList } from "../util/api/order";
import { useRecoilState, useRecoilValue } from "recoil";
//import { alertState } from "../atom/alert";
import { loginState } from "../atom/login";
import { menuState } from "../atom/menu";
//import Swal from "sweetalert2";
//import withReactContent from "sweetalert2-react-content";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  border-radius: 5px;
  box-shadow: 10px 10px 10px 0 gray;
  margin-top: 20px;
`;

const Tr = styled.tr``;

const Td = styled.td`
  padding: 10px;
`;

export default function OrderTable() {
  const [menu, setMenu] = useRecoilState(menuState);

  const [mounted, setMounted] = useState(false); // 로딩중 상태 표현
  console.log(mounted); // 임시 주의제거용

  const loginInfo = useRecoilValue(loginState); // 리코일 사용해서
  // 전역상태의 로그인 정보를 가져오기

  // 엘럿창
  /*
  const [isAlertInitial, setAlert] = useRecoilState(alertState);
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
  });

  const MySwal = withReactContent(Toast);

  */
  useEffect(() => {
    // 이거는 로그인 정보가 있는지 확인
    if (loginInfo.id) {
      getOrderList(loginInfo.id).then((data) => {
        setMenu(data); // 이걸로 렌더링 데이터 지정
        setMounted(true);
      });
    } else {
    }
  }, [loginInfo, setMenu]);

  useEffect(() => {}, [loginInfo]);
  /*
  useEffect(() => {
    if (isAlertInitial) {
      setTimeout(() => {
        setMenu((prev) => [
          ...prev,
          {
            number: "4",
            time: "2022-08-03 13:34",
            menus: "콰트로치즈X 1, 기네스콰트로치즈와퍼 1",
            price: "7000",
            status: True,
          },
        ]);
        setAlert(false);
        MySwal.fire({
          icon: "success",
          title: "주문이 추가되었습니다.",
        });
      }, 5000);
      setTimeout(() => {
        setMenu((prev) => [
          ...prev,
          {
            number: "5",
            time: "2022-08-03 14:11",
            menus: "치즈렐라와퍼 1 , 치즈렐라치킨버거 1, 몬스터X 1",
            price: "10500",
            status: True,
          },
        ]);
        setAlert(false);
        MySwal.fire({
          icon: "success",
          title: "주문이 추가되었습니다.",
        });
      }, 10000);
    }
  }, [MySwal, isAlertInitial, setAlert, setMenu]);
*/

  const acceptMenu = (e) => {
    const p = [...menu].filter((item) => item.number !== e.number);

    setMenu([
      ...p,
      {
        number: e.number,
        time: e.time,
        menus: e.menus,
        price: e.price,
        status: false,
      },
    ]);
  };

  const deleteMenu = (number) => {
    setMenu((prev) => [...prev].filter((e) => number !== e.number));
  };

  return (
    <StyledTable>
      <thead>
        <Tr>
          <th>주문번호</th>
          <th>주문시간</th>
          <th>주문내역</th>
          <th>결제가격</th>
          <th>진행상황</th>
        </Tr>
      </thead>
      <tbody>
        {menu.map((item) => (
          <Tr key={item.number}>
            <Td>{item.number}</Td>
            <Td>{item.time} </Td>
            <Td>{item.menus}</Td>
            <Td>{item.price} </Td>
            <Td>
              {item.status ? (
                <div key={item.number}>
                  <button className="accept" onClick={() => acceptMenu(item)}>
                    주문승인
                  </button>
                  <button
                    className="cancel"
                    onClick={() => deleteMenu(item.number)}
                  >
                    주문거절
                  </button>
                </div>
              ) : (
                "완료"
              )}
            </Td>
          </Tr>
        ))}
      </tbody>
    </StyledTable>
  );
}
