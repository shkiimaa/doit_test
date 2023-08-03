import Layout from './components/Layout';
import Main from './components/Main';
import BoardList from './components/board/BoardList';
import BoardPost from './components/board/BoardPost';
import BoardDetail from './components/board/BoardDetail';
import BoardModify from './components/board/BoardModify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyles from './styles/GlobalStyles';
import Test from './components/Test';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/board" element={<BoardList />}></Route>
            <Route path="/board/post" element={<BoardPost />}></Route>
            <Route path="/board/:id" element={<BoardDetail />}></Route>
            <Route path="/board/modify/:id" element={<BoardModify />}></Route>
            <Route path="/test" element={<Test />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
