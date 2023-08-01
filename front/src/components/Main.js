import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Main = () => {
  return (
    <div>
      메인페이지
      <Link to="/post">
        <Button>Post</Button>
      </Link>
      <main>
        <ul>
          <li>
            <Button>modify</Button>
            <Button>delete</Button>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Main;
