import client from "../client";

export const getLoginStatus = async (id, pw) => {
  const { data } = await client.post(`/api/manager/login`, {
    id: id,
    password: pw,
  });
  console.log(data);
  return true;
};
