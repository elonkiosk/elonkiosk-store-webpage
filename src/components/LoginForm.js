import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { loginState } from "../atom/login";
import { Link } from "react-router-dom";

const StyledTitle = styled.h2`
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
`;

const StyledForm = styled.form`
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
  background-color: rgb(149, 234, 204);
  color: black;
  border-radius: 4px;
  align-items: center;
  font-size: 70%;
  font-weight: 600;
  border: none;

  &:hover {
    background-color: rgb(149, 215, 204);
    cursor: pointer;
  }
`;

const DelBtn = styled.button`
  height: 50px;
  width: 200px;
  background-color: rgb(226, 71, 88);
  color: white;
  border-radius: 4px;
  align-items: center;
  font-size: 70%;
  font-weight: 600;
  margin-bottom: 20px;
  border: none;

  &:hover {
    background-color: rgb(193, 71, 88);
    cursor: pointer;
  }
`;

export default function LoginForm() {
  const loginInfo = useRecoilValue(loginState); // 리코일 사용해서
  // 전역상태의 로그인 정보를 가져오기
  console.log(loginInfo);
  useEffect(() => {
    if (loginInfo.id) {
    }
  }, [loginInfo]);

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

  /*
    onSubmit={(e) => {
          e.preventDefault();
        }}
*/

  return (
    <StyledForm method="post" action="">
      <StyledTitle>로그인</StyledTitle>
      <input type="hidden" name="signin" value="" />
      <StyledTable>
        <tbody>
          <tr>
            <Td>
              <label> 아이디 </label>
            </Td>
            <Td>
              <StyledInput type="text" />
            </Td>
          </tr>
          <tr>
            <Td>
              <label> 비밀번호 </label>
            </Td>
            <Td>
              <StyledInput type="password" />
            </Td>
          </tr>
        </tbody>
      </StyledTable>

      <hr />

      <BtnWrapper>
        <StyledSubmit type="submit" value="로그인" />
        <StyledLink to="/signup">
          <DelBtn>회원가입</DelBtn>
        </StyledLink>
      </BtnWrapper>
    </StyledForm>
  );
}
