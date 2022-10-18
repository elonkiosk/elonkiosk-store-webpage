import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../atom/login";
import { getLoginStatus } from "../util/api/login";

const StyledTitle = styled.h2`
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
`;

const StyledForm = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 0 10px 10px 0 gray;
  width: 50%;
  height: auto;
`;

const StyledInput = styled.input`
  width: 70%;
  height: 40px;
  border-radius: 5px;
  border: none;
  /*border-bottom: 1px solid gray;*/
  box-shadow: 0 2px 2px 0 gray;
  margin-bottom: 10px;
`;

const StyledTable = styled.table`
  width: 100%;
  height: 50%;
`;

const Td = styled.td`
  text-align: center;
  padding: 10px;
`;

const BtnWrapper = styled.div`
  display: flex;
  padding: 0;
  margin-top: 20px;
  padding-top: 20px;
  height: auto;
  justify-content: space-evenly;
`;

const StyledSubmit = styled.input`
  height: 50px;
  width: 200px;
  background-color: #a7dee8; /*#70adb8;*/ /*#77b854;*/ /*rgb(149, 234, 204);*/
  color: black;
  border-radius: 4px;
  align-items: center;
  font-size: 70%;
  font-weight: 600;
  border: none;

  &:hover {
    background-color: #82adb5;
    cursor: pointer;
  }
`;

const DelBtn = styled.button`
  height: 50px;
  width: 200px;
  background-color: #2895a8; /*#2b822d; */ /*rgb(226, 71, 88);*/
  color: black;
  border-radius: 4px;
  align-items: center;
  font-size: 70%;
  font-weight: 600;
  margin-bottom: 20px;
  border: none;

  &:hover {
    background-color: #217e8f;
    cursor: pointer;
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

export default function LoginForm() {
  const [userId, setUserId] = useState("");
  const [userPw, setPassword] = useState("");

  const [loginInfo, setLoginInfo] = useRecoilState(loginState); // 리코일 사용해서
  console.log(loginInfo);

  async function submit() {
    const data = await getLoginStatus(userId, userPw);
    if (data) {
      setLoginInfo(userId);
      console.log(loginInfo);
    }
  }

  return (
    <StyledForm>
      <StyledTitle>로그인</StyledTitle>
      {/*<input type="hidden" name="signin" value="" />*/}
      <StyledTable>
        <tbody>
          <tr>
            <Td>
              <label> 아이디 </label>
            </Td>
            <Td>
              <StyledInput
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </Td>
          </tr>
          <tr>
            <Td>
              <label> 비밀번호 </label>
            </Td>
            <Td>
              <StyledInput
                type="password"
                value={userPw}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Td>
          </tr>
        </tbody>
      </StyledTable>

      <hr />

      <BtnWrapper>
        <StyledSubmit type="button" onClick={submit} value="로그인" />
        <StyledLink to="/signup">
          <DelBtn>회원가입</DelBtn>
        </StyledLink>
      </BtnWrapper>
    </StyledForm>
  );
}
