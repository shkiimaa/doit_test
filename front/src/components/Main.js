import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      메인페이지
      <Link to="/post">
        <button>Post</button>
      </Link>
      <main>
        <ul>
          <li></li>
        </ul>
      </main>
    </div>
  );
};

export default Main;
