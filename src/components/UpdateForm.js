import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import { getMenu } from "../util/api/menu";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StyledTitle = styled.h2`
  margin-top: 20px;
  margin-left: 20px;
`;

const StyledForm = styled.form`
  font-size: 1.2rem;
  font-weight: bold;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  width: 70%;
  height: auto;
`;

const StyledInput = styled.input`
  width: 60%;
  height: 50px;
  border: none;
  border-bottom: 1px solid gray;
`;

const StyledTextArea = styled.input`
  width: 60%;
  height: 200px;
  border-radius: 5px;
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
  background-color: #a7dee8;
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
  background-color: #2895a8;
  color: black;
  border-radius: 4px;
  align-items: center;
  font-size: 70%;
  font-weight: 600;
  margin-bottom: 20px;
  border: none;

  &:hover {
    background-color: #82adb5;
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

export default function UpdateForm() {
  const [name, setName] = useState(localStorage.getItem("menuName"));
  const [price, setPrice] = useState(localStorage.getItem("menuPrice"));
  const [explanation, setExplanation] = useState(
    localStorage.getItem("menuExplanation")
  );

  const num = localStorage.getItem("curNum");
  //const storeInfo = localStorage.getItem("storeId");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.patch(`https://qr-ufo.com/api/menu/${num}`, {
      name: name,
      price: price,
      explanation: explanation,
    });

    navigate(`/menulist`);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle>메뉴 수정하기</StyledTitle>
        <StyledTable>
          <tbody>
            <tr>
              <Td>
                <label> 메뉴 이름 </label>
              </Td>
              <Td>
                <StyledInput
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Td>
            </tr>

            <tr>
              <Td>
                <label> 가격 </label>
              </Td>
              <Td>
                <StyledInput
                  type="number"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Td>
            </tr>

            <tr>
              <Td>
                <label> 메뉴 설명 </label>
              </Td>
              <Td>
                <StyledTextArea
                  type="textarea"
                  name="description"
                  value={explanation}
                  onChange={(e) => {
                    setExplanation(e.target.value);
                  }}
                />
              </Td>
            </tr>
          </tbody>
        </StyledTable>

        <hr />

        <BtnWrapper>
          <StyledSubmit type="submit" value="메뉴 수정하기" />
          <StyledLink to="/menulist">
            <DelBtn>나가기</DelBtn>
          </StyledLink>
        </BtnWrapper>
      </StyledForm>
    </>
  );
}
