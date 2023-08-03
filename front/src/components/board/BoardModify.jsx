import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import useBoard from '../../hooks/useBoard';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { BOARD } from '../../recoil/atoms';
import { BtnWrapper } from './styled';

const BoardModify = () => {
  const { id } = useParams();
  const [board, setBoard] = useRecoilState(BOARD);
  const { patchBoard, deleteBoard } = useBoard();

  const [newPassword, setNewPassword] = useState(false);
  const password = useRef();
  password.current = board.password;
  const navigate = useNavigate();

  const checkedPW = (e) => {
    if (password.current === e.target.value) setNewPassword(true);
  };

  const onChnageHandler = (e) => {
    const { value, name } = e.target;
    setBoard({ ...board, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!newPassword) {
      alert('잘못된 비밀번호');
      return;
    }
    patchBoard(board);
    navigate(`/board/${id}`);
  };

  const onDeleteHandler = (e) => {
    e.stopPropagation();
    deleteBoard(board._id);
    navigate('/board');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <InputContainer>
        <input
          type="text"
          name="name"
          defaultValue={board.name}
          placeholder="name"
          onChange={onChnageHandler}
        />
        <input
          type="text"
          name="title"
          defaultValue={board.title}
          placeholder="title"
          onChange={onChnageHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onBlur={checkedPW}
        />
        <textarea
          name="content"
          defaultValue={board.content}
          placeholder="content"
          type="text"
          cols="30"
          rows="10"
          onChange={onChnageHandler}
        />
      </InputContainer>
      <BtnWrapper>
        <button>done</button>
        <button onClick={onDeleteHandler}>delete</button>
      </BtnWrapper>
    </form>
  );
};

export default BoardModify;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
