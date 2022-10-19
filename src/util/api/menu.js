import client from "../client";

// R
export const getMenuList = async (id) => {
  const data = await client
    .get(`/api/store/${id}/menus`)
    .then((response) => response);
  return data;
};

// D
export const deleteMenu = async (id, menuId) => {
  await client.post(`/menu/...`);
};

// U
// export const updateMenu = async (id, menuId, )

// C
export const insertMenu = async (id, menu) => {
  await client.post(`/menu/...`);
};
