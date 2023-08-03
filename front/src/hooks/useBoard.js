import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { BOARD_LIST, BOARD } from '../recoil/atoms';

const useBoard = () => {
  const [board, setBoard] = useRecoilState(BOARD);
  const setBoardList = useSetRecoilState(BOARD_LIST);
  const API_URL = process.env.REACT_APP_BACKEND_URL;

  const getBoard = async () => {
    try {
      const response = await axios.get(`${API_URL}/board`);
      const { data } = response;
      setBoardList(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getSelectedBoard = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/board/${id}`);
      const { data } = response;
      setBoard(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBoard = async (id) => {
    try {
      const response = await axios.post(`${API_URL}/board/delete/${id}`);
      const { data } = response;
      setBoardList(data);
    } catch (err) {
      console.log(err);
    }
  };

  const patchBoard = async (boardData) => {
    const { _id } = boardData;
    try {
      const response = await axios.post(`${API_URL}/board/update/${_id}`, {
        userInput: boardData,
      });
      const { data } = response;
      setBoard(data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    board,
    setBorad: setBoard,
    getBoard,
    getSelectedBoard,
    deleteBoard,
    patchBoard,
  };
};

export default useBoard;
