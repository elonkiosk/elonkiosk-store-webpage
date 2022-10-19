import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../atom/login";
import { storeState } from "../atom/store";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: cadetblue;
  padding: 20px;
  margin-bottom: 20px;
`;

const Logo = styled.h1`
  display: inline-block;
  vertical-align: middle;
  color: black;
  margin: 0.5rem;
  padding: 0;
`;

const Nav = styled.nav`
  display: inline-block;
  vertical-align: middle;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Li = styled.li`
  display: block;
  text-align: center;
  margin: 0.25rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: white;
  background: teal;

  &:hover {
    background: skyblue;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function NavBar() {
  const [, setLoginInfo] = useRecoilState(loginState);
  const [, setStoreInfo] = useRecoilState(storeState);
  // 전역상태의 로그인 정보를 가져오기
  //console.log(loginInfo);
  // 이거는 로그인 정보가 있는지 확인

  const loginInfo = localStorage.getItem("userId");

  const logout = () => {
    console.log(loginInfo);
    setLoginInfo("");
    setStoreInfo("");
    localStorage.removeItem("userId");
    localStorage.removeItem("storeId");
  };

  return (
    <NavWrapper>
      <Logo>QR UFO for Store</Logo>
      <Nav>
        <Ul>
          <Li className="userinfo">
            {loginInfo !== null ? (
              <StyledLink to="/login" onClick={logout}>
                <div>로그아웃</div>
              </StyledLink>
            ) : (
              <StyledLink to="/login">
                <div>로그인</div>
              </StyledLink>
            )}
          </Li>
          <Li className="order">
            <StyledLink to="/orderlist">
              <div>주문목록</div>
            </StyledLink>
          </Li>
          <Li className="menu">
            <StyledLink to="/menulist">
              <div>메뉴관리</div>
            </StyledLink>
          </Li>
        </Ul>
      </Nav>
    </NavWrapper>
  );
}
