import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const ButtonWrap = styled.div`
  margin-bottom: 15px;
  display: flex;
  width: 100%;
  position: fixed;
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

const Button = styled.button`
  margin-left: auto;
  padding: none;
  margin-right: 50px;
  height: 70px;
  width: 70px;
  background: cadetblue;
  color: black;
  border: none;
  border-radius: 35px;
  align-items: center;
  font-size: 30px;
  font-weight: 600;

  &:hover {
    background: skyblue;
    cursor: pointer;
  }
`;

export default function AddButton() {
  return (
    <ButtonWrap>
      <Button>
        <StyledLink to="/menuform">&#43;</StyledLink>
      </Button>
    </ButtonWrap>
  );
}
