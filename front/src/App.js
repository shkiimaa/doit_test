import PostForm from './components/PostForm';
import Layout from './components/Layout';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/post" element={<PostForm />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
