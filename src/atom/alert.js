import { atom } from 'recoil';

export const alertState = atom({
	key: 'alertIsInitial', // unique ID (with respect to other atoms/selectors)
	default: true // default value (aka initial value)
});
