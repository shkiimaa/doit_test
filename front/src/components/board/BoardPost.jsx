import React, { useEffect } from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { BOARD_LIST } from '../../recoil/atoms';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  password: '',
  title: '',
  content: '',
};

const BoardPost = () => {
  const [borad, setBorad] = useState(initialState);
  const [boardList, setBoardList] = useRecoilState(BOARD_LIST);

  const navigate = useNavigate();

  const postBorad = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/board`,
        {
          userInput: borad,
        }
      );
      const { data } = response;
      setBoardList([...boardList, data]);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    postBorad();
    navigate('/board');
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setBorad({ ...borad, [name]: value });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={onChangeHandler}
      />
      <input
        name="password"
        type="text"
        placeholder="password"
        onChange={onChangeHandler}
      />
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={onChangeHandler}
      />
      <textarea
        onChange={onChangeHandler}
        name="content"
        placeholder="content"
        cols="30"
        rows="10"
      />
      <button>post</button>
    </Form>
  );
};

export default BoardPost;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
