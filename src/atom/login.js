import { atom } from 'recoil';

export const loginState = atom({
	key: 'login', // unique ID (with respect to other atoms/selectors)
	default: {
		id: ''
	} // default value (aka initial value)
});
