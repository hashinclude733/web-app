import { atom } from 'recoil';

// Atom to represent the count state
export const countState = atom({
  key: 'countState',
  default: 0,
});
