import client from "../client";

export const getLoginStatus = async (id, pw) => {
  const { data } = await client.post(`/api/manager/login`, {
    id: id,
    password: pw,
  });
  return data;
};

export const getStoreId = async (storeId) => {
  const { data } = await client.get(`/api/manager/${storeId}/store`);
  return data;
};
