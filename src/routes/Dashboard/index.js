import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _get from 'lodash/get';
import { connect } from 'react-redux';
import CategoryActions from '../../redux/reducer/categoryReducer';
import CardImage from '../../components/CardImage';
import Pagination from '../../components/Pagination';
import Spacing, { SpacingSizes } from '../../components/styled/Spacing';
import MainLayout from '../../Layout/MainLayout';
import Http from '../../utils/HttpUtils';

const Dashboard = ({ category, fetchCategoryList, auth }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isFetching, categories } = category;
  const { isLoggedIn } = auth;

  useEffect(() => {
    fetchCategoryList({
      page: currentPage,
    });
    Http.get('https://picsum.photos/v2/list?page=2&limit=10')
      .then((response) => {
        const responseData = _get(response, 'data', []);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  return (
    <MainLayout loading={isFetching}>
      <Center>
        <Spacing size={SpacingSizes.LG} />
        <GridSystem>
          {[100, 1000, 1002, 1001, 101, 1005, 1009, 1011, 1014, 1013].map(
            (item) => {
              return (
                <CardImage src={`https://picsum.photos/id/${item}/3000/2000`} />
              );
            },
          )}
        </GridSystem>
        <Spacing size={SpacingSizes.LG} />
        <Pagination
          currentPage={currentPage}
          totalItems={7}
          onChangePageNumber={setCurrentPage}
        />
      </Center>
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  category: state.category,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategoryList: (payload) =>
    dispatch(CategoryActions.fetchCategories(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

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
