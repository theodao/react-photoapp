import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import MainLayout from '../../Layout/MainLayout';

export default () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <MainLayout loading={false}>
      <Pagination
        currentPage={currentPage}
        totalItems={100}
        onChangePageNumber={setCurrentPage}
      />
    </MainLayout>
  );
};
