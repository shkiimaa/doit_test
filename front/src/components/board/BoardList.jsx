import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import useBoard from '../../hooks/useBoard';
import { BOARD_LIST } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { Title, Number } from './styled';
import Header from '../Header';
import Paging from '../Paging';

const BoardList = () => {
  const { getBoard } = useBoard();
  const boardList = useRecoilValue(BOARD_LIST);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(15);

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    getBoard();
  }, []);

  console.log(boardList);

  return (
    <BoradContainer>
      <HeaderWrapper>
        <Header>게시판</Header>
        <Link to="/board/post">
          <button>Post</button>
        </Link>
      </HeaderWrapper>
      <MainContent>
        {boardList.length === 0 ? (
          <div>게시글이 없습니다.</div>
        ) : (
          <ul>
            <BoardListHeaderContainer>
              <TitleWrapper>
                <Number>Number</Number>
                <Title>Title</Title>
              </TitleWrapper>
              <p>name</p>
            </BoardListHeaderContainer>
            {boardList
              .slice(items * (page - 1), items * (page - 1) + items)
              .map((board, idx) => {
                return (
                  <NavLink to={`/board/${board._id}`} key={board._id}>
                    <BoardListContainer>
                      <TitleWrapper>
                        <Number>
                          {page > 1 ? (page - 1) * items + idx + 1 : idx + 1}
                        </Number>
                        <Title>{board.title}</Title>
                      </TitleWrapper>
                      <p>{board.name}</p>
                    </BoardListContainer>
                  </NavLink>
                );
              })}
          </ul>
        )}
      </MainContent>
      <Paging
        page={page}
        items={items}
        totalItemsCount={boardList.length - 1}
        handlePageChange={handlePageChange}
      />
    </BoradContainer>
  );
};

export default BoardList;

const BoradContainer = styled.div`
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TitleWrapper = styled.span`
  display: flex;
`;

const BoardListContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px;
`;

const BoardListHeaderContainer = styled(BoardListContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid darkgrey;
`;

const MainContent = styled.article`
  min-height: 578px;
  height: 86%;
  background-color: white;
`;

const NavLink = styled(Link)`
  :hover {
    background-color: #d9d9d9;
    cursor: pointer;
  }
`;
