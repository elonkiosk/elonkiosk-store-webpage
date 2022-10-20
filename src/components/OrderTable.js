import React, { useEffect } from "react";
import { getOrderList } from "../util/api/order";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "../atom/login";
//import { storeState } from "../atom/store";
import { menuState } from "../atom/menu";
import { alertState } from "../atom/alert";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { acceptOrder, deleteOrder } from "../util/api/order";
import useInterval from "../util/timer/timer";

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

  const loginInfo = useRecoilValue(loginState);
  //const storeInfo = useRecoilValue(storeState);
  // 리코일 사용해서
  // 전역상태의 로그인 정보를 가져오기

  // 엘럿창
  const [, setAlert] = useRecoilState(alertState);
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
  });

  const MySwal = withReactContent(Toast);
  const navigate = useNavigate();

  useInterval(async function fetch() {
    console.log("실행");
    const userInfo = localStorage.getItem("userId");
    const storeInfo = localStorage.getItem("storeId");
    if (userInfo && storeInfo) {
      const response = await getOrderList(storeInfo);
      if (menu.length !== response.data.length) {
        setAlert(false);
        MySwal.fire({
          icon: "success",
          title: "주문이 추가되었습니다. ",
        });
      }
      setMenu(response.data);
      console.dir(response.data);
    }
  }, 1500);

  useEffect(() => {
    const userInfo = localStorage.getItem("userId");
    const storeInfo = localStorage.getItem("storeId");
    if (!userInfo || !storeInfo) {
      setAlert(false);
      MySwal.fire({
        icon: "error",
        title: "로그인이 필요한 서비스 입니다.",
      });
      navigate(`/login`);
    }
  }, [MySwal, navigate, setAlert]);

  return loginInfo ? (
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
        {[...menu].reverse().map((item) => (
          <Tr key={item.number}>
            <Td>{item.number}</Td>
            <Td>{item.time}</Td>
            <Td>
              {item.menus.map((m, idx) => (
                <p key={idx}>{m.name}</p>
              ))}
            </Td>
            <Td>{item.total}원</Td>
            <Td>
              {item.status === "waiting" ? (
                <div key={item.number}>
                  <button
                    className="accept"
                    onClick={() => acceptOrder(item.number)}
                  >
                    주문승인
                  </button>
                  <button
                    className="cancel"
                    onClick={() => deleteOrder(item.number)}
                  >
                    주문거절
                  </button>
                </div>
              ) : item.status === "denied" ? (
                "주문 거절"
              ) : (
                "주문 승인"
              )}
            </Td>
          </Tr>
        ))}
      </tbody>
    </StyledTable>
  ) : (
    <Navigate to="/login" />
  );
}
