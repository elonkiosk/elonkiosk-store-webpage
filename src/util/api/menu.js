import client from "../client";

// R
export const getMenuList = async (id) => {
  const data = await client
    .get(`/api/store/${id}/menus`)
    .then((response) => response);
  return data;
};

// D
export const deleteMenu = async (menuId) => {
  await client.delete(`/api/menu/${menuId}`);
};

// U
export const getMenu = async (menuId) => {
  const data = await client
    .get(`/api/menu/${menuId}`)
    .then((response) => response);
  return data;
};

// C
export const insertMenu = async (id, menu) => {
  await client.post(`/menu/...`);
};
