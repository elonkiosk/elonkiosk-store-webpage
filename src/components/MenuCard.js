import styled from "styled-components";
import React from "react";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-left: 50%;
  margin-bottom: 20px;
  width: 80%;
  box-shadow: 0 10px 10px 0 gray;
  transform: translate(-50%, 0);
`;

const StyledImg = styled.img`
  width: 150px;
  height: auto;
  border-radius: 5px;
  margin: 20px;
  margin-right: 0;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const CardBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
`;

const UpdateBtn = styled.button`
  height: 50px;
  width: 200px;
  background-color: rgb(149, 234, 204);
  color: black;
  border-radius: 4px;
  align-items: center;
  font-size: 70%;
  font-weight: 600;
  margin-bottom: 20px;
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

const StyledText = styled.div`
  margin-bottom: 20px;
`;

export default function MenuCard(props) {
  const menuinfo = props.menuinfo;
  return (
    <Box>
      <StyledImg
        src="img/coffee.jpg"
        width="100px"
        height="100px"
        alt="testA"
      />
      <DescriptionBox>
        <StyledText>{menuinfo.menus}</StyledText>
        <StyledText>{menuinfo.price}원</StyledText>
        <StyledText>
          {/*menuinfo.decription - 추가 예정*/} 햄버거 햄버거 햄버거 입니다.
          아마도 말이죠.
        </StyledText>
      </DescriptionBox>
      <CardBtnWrap>
        <UpdateBtn>메뉴 수정</UpdateBtn>
        <DelBtn>메뉴 삭제</DelBtn>
      </CardBtnWrap>
    </Box>
  );
}
