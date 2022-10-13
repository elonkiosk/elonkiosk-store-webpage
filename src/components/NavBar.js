import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

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
  return (
    <NavWrapper>
      <Logo>Elon-Kiosk for Store</Logo>
      <Nav>
        <Ul>
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
