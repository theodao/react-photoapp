import React, { useState, useEffect } from 'react';
import { Pagination } from '@gotitinc/design-system';

const { Prev, Item, Next, Ellipsis } = Pagination;

export default ({
  currentPage = 1,
  totalItems = 1,
  onChangePageNumber = () => {},
}) => {
  const [current, setCurrent] = useState(currentPage);
  const [pageList, setPageList] = useState([]);

  useEffect(() => {
    setCurrent(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const numberOfPage = Math.trunc(totalItems / 10);
    const pageNumbers = [];

    for (let i = 1; i <= numberOfPage; i += 1) {
      pageNumbers.push(i);
    }

    setPageList(pageNumbers);
  }, [totalItems]);

  return (
    <div className="u-textCenter">
      <Pagination>
        <Prev
          disabled={current === 1}
          onClick={() => {
            if (current !== 1) {
              onChangePageNumber(current - 1);
            }
          }}
        />
        {pageList.map((page) => {
          return (
            <Item
              active={current === page}
              onClick={() => {
                onChangePageNumber(page);
              }}
            >
              {page}
            </Item>
          );
        })}
        <Next
          disabled={current === pageList.length}
          onClick={() => {
            if (current !== pageList.length) {
              onChangePageNumber(current + 1);
            }
          }}
        />
      </Pagination>
    </div>
  );
};
