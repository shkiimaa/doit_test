import React, { useState } from 'react';
import './Paging.css';
import Pagination from 'react-js-pagination';

const Paging = ({ page, itmes, totalItemsCount, handlePageChange }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={itmes}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
