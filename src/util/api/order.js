import client from "../client";

export const getOrderList = async (id) => {
  const data = await client
    .get(`/api/order/store/${id}`)
    .then((response) => JSON.parse(response));

  console.log(data);
  return data;
};
