import client from '../client';

export const getOrderList = async (id) => {
	const { data } = await client.get(`/order/${id}`);

	return data;
};
