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

export default function OrderCard(props) {
  const orderinfo = props.orderinfo;
  return (
    <Box>
      <StyledImg
        src="img/coffee.jpg"
        width="100px"
        height="100px"
        alt="testA"
      />
      <DescriptionBox>
        <StyledText>{orderinfo.number}</StyledText>
        <StyledText>{orderinfo.time}</StyledText>
        <StyledText>{orderinfo.price}원</StyledText>
        <StyledText>{orderinfo.menus}</StyledText>
        <StyledText>
          {orderinfo.status ? (
            <div key={orderinfo.number}>
              <UpdateBtn>주문 승인</UpdateBtn>
              <DelBtn>주문 거절</DelBtn>
            </div>
          ) : (
            "완료"
          )}
        </StyledText>
      </DescriptionBox>
      <CardBtnWrap></CardBtnWrap>
    </Box>
  );
}

/*  
              <td>{item.number}</td>
              <td>{item.time} </td>
              <td>{item.menus}</td>
              <td>{item.price} </td>
              <td>
                {item.status ? (
                  <div key={item.number}>
                    <button className="accept" onClick={() => acceptMenu(item)}>
                      주문승인
                    </button>
                    <button
                      className="cancel"
                      onClick={() => deleteMenu(item.number)}
                    >
                      주문거절
                    </button>
                  </div>
                ) : (
                  "완료"
                )}
              </td>
*/
