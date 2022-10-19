import React, { useState } from "react";
//import { useRecoilValue } from "recoil";
import styled from "styled-components";
//import { loginState } from "../atom/login";
import { Link } from "react-router-dom";
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
  border-radius: 5px;
  box-shadow: 0 10px 10px 0 gray;
  width: 70%;
  height: auto;
`;

const StyledInput = styled.input`
  width: 60%;
  height: 50px;
  border: none;
  border-bottom: 1px solid gray;
`;

const StyledFileInput = styled.input`
  width: 60%;
  border: none;
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

const CategoryWrapper = styled.div`
  height: 50px;
`;

const StyledCategory = styled.input`
  margin-top: 20px;
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
export default function InsertForm() {
  const [files, setFiles] = useState();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [explanation, setExplanation] = useState("");

  const storeId = localStorage.getItem("storeId");

  const handleSubmit = (e) => {
    console.log(files);
    e.preventDefault();

    const formData = new FormData();

    const bodyObj = {
      name: name,
      category: category,
      price: price,
      explanation: explanation,
    };

    formData.append("body", JSON.stringify(bodyObj));
    formData.append("file", files);
    console.log(files);

    axios({
      method: "post",
      url: "http://localhost:3000/api/menu",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setFiles(null);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(e.target.files[0]);
    setFiles(file);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle>메뉴 추가하기</StyledTitle>
      <input type="hidden" name="store" value={storeId} />
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
                onChange={(e) => setName(e.target.value)}
              />
            </Td>
          </tr>

          <tr>
            <Td>
              <label> 카테고리 </label>
            </Td>

            <Td>
              <CategoryWrapper>
                <label> 커피 </label>
                <StyledCategory
                  type="radio"
                  name="category"
                  value="커피"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCategory("커피");
                    }
                  }}
                />
                <label> 음료 </label>
                <StyledCategory
                  type="radio"
                  name="category"
                  value="일반음료"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCategory("일반음료");
                    }
                  }}
                />
                <label> 빵 </label>
                <StyledCategory
                  type="radio"
                  name="category"
                  value="빵"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCategory("빵");
                    }
                  }}
                />
              </CategoryWrapper>
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
                name="explanation"
                onChange={(e) => setExplanation(e.target.value)}
              />
            </Td>
          </tr>

          <tr>
            <Td>
              <label> 메뉴 이미지 </label>
            </Td>
            <Td>
              <StyledFileInput
                type="file"
                accept="image/jpeg,image/jpg,image/png"
                name="file"
                onChange={handleUpload}
              />
            </Td>
          </tr>
        </tbody>
      </StyledTable>

      <hr />

      <BtnWrapper>
        <StyledSubmit type="submit" value="메뉴 추가하기" />
        <StyledLink to="/menulist">
          <DelBtn>나가기</DelBtn>
        </StyledLink>
      </BtnWrapper>
    </StyledForm>
  );
}
