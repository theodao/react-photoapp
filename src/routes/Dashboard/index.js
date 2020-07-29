import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _get from 'lodash/get';
import CardImage from '../../components/CardImage';
import Pagination from '../../components/Pagination';
import MainLayout from '../../Layout/MainLayout';
import Http from '../../utils/HttpUtils';
import styles from './styles.module.scss';

export default () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    Http.get('https://picsum.photos/v2/list?page=2&limit=10')
      .then((response) => {
        const responseData = _get(response, 'data', []);
        setData(responseData);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  return (
    <MainLayout loading={false}>
      <Center>
        <GridSystem>
          {[100, 1000, 1002, 1001, 101, 1005, 1009, 1011, 1014, 1013].map(
            (item) => {
              return (
                <CardImage src={`https://picsum.photos/id/${item}/3000/2000`} />
              );
            },
          )}
        </GridSystem>
        <Pagination
          currentPage={currentPage}
          totalItems={7}
          onChangePageNumber={setCurrentPage}
        />
      </Center>
    </MainLayout>
  );
};

const Center = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const GridSystem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 200px);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  max-width: 1140px;
  align-items: center;
`;

const GridItem = styled.div`
  width: 100%;
  height: 100%;
`;
