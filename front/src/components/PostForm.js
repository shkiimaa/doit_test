import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';

const initialState = {
  name: '',
  password: '',
  title: '',
  content: '',
};

const PostForm = () => {
  const [userInput, setUserInput] = useState(initialState);

  const postBorad = async () => {
    const response = await axios.post('http://localhost:8800/list', {
      userInput,
    });
    console.log(response);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    postBorad();
  };
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setUserInput({ ...userInput, [name]: value });
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

export default PostForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
