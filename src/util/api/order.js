import client from "../client";

export const getOrderList = async (id) => {
  const data = await client
    .get(`/api/order/store/${id}`)
    .then((response) => response);
  return data;
};
