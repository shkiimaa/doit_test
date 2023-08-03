import { atom } from 'recoil';

export const BOARD_LIST = atom({
  key: 'boardList',
  default: [],
});

export const BOARD = atom({
  key: 'board',
  default: {},
});
