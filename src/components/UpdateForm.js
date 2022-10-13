import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export default function UpdateForm() {
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
    <>
      <StyledForm method="post" action="">
        <StyledTitle>메뉴 추가하기</StyledTitle>
        <input type="hidden" name="store_id" value="" />
        <StyledTable>
          <tbody>
            <tr>
              <Td>
                <label> 메뉴 이름 </label>
              </Td>
              <Td>
                <StyledInput type="text" />
              </Td>
            </tr>

            <tr>
              <Td>
                <label> 카테고리 </label>
              </Td>

              <Td>
                <CategoryWrapper>
                  <label> 커피 </label>
                  <StyledCategory type="radio" name="category" value="커피" />

                  <label> 음료 </label>
                  <StyledCategory
                    type="radio"
                    name="category"
                    value="일반 음료"
                  />

                  <label> 빵 </label>
                  <StyledCategory type="radio" name="category" value="빵" />
                </CategoryWrapper>
              </Td>
            </tr>

            <tr>
              <Td>
                <label> 가격 </label>
              </Td>
              <Td>
                <StyledInput type="number" name="price" />
              </Td>
            </tr>

            <tr>
              <Td>
                <label> 메뉴 설명 </label>
              </Td>
              <Td>
                <StyledTextArea type="textarea" name="description" />
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
                  name="image"
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
    </>
  );
}
