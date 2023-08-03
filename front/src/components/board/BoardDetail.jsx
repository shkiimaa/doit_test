import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { BOARD } from '../../recoil/atoms';
import { styled } from 'styled-components';
import useBoard from '../../hooks/useBoard';
import { BtnWrapper, Title } from './styled';

const BoardDetail = () => {
  const { id } = useParams();
  const board = useRecoilValue(BOARD);
  const { getSelectedBoard, deleteBoard } = useBoard();
  const navigate = useNavigate();

  const password = useRef();
  password.current = board.password;

  const isModify = (e) => {
    navigate(`/board/modify/${id}`);
  };

  const onDeleteHandler = (e) => {
    e.stopPropagation();
    deleteBoard(board._id);
    navigate('/board');
  };

  useEffect(() => {
    getSelectedBoard(id);
  }, []);

  return (
    <>
      <>
        <TitleContainer>
          <Title>title : {board.title}</Title>
          <p>name : {board.name}</p>
        </TitleContainer>
        <Content>content : {board.content}</Content>
      </>
      <BtnWrapper>
        <button onClick={isModify}>modify</button>
        <button onClick={onDeleteHandler}>delete</button>
      </BtnWrapper>
    </>
  );
};

export default BoardDetail;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
`;

const Content = styled.main`
  padding: 10px;
  min-height: 400px;
  background-color: white;
  margin-bottom: 10px;
`;
