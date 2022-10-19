import client from "../client";

export const getOrderList = async (id) => {
  const data = await client
    .get(`/api/order/store/${id}`)
    .then((response) => response);
  return data;
};

export const acceptOrder = async (itemNum) => {
  await client.patch(`/api/order/${itemNum}`, {
    status: "complete",
  });
};

export const deleteOrder = async (itemNum) => {
  await client.patch(`/api/order/${itemNum}`, {
    status: "denied",
  });
};
