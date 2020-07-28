import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import MainLayout from '../../Layout/MainLayout';

export default () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <MainLayout loading={false}>
      <table className="Table Table--striped u-backgroundWhite u-textDark u-text200">
        <thead>
          <tr>
            <th scope="col" width="110px">
              Customer ID
            </th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone</th>
            <th scope="col">Job Title</th>
            <th scope="col">City</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((item) => (
            <tr>
              <td>{1}</td>
              <td>{2}</td>
              <td>{3}</td>
              <td>{4}</td>
              <td>{5}</td>
              <td>{6}</td>
              <td>{7}</td>
              <td className={true ? 'u-textPositive' : 'u-textGray'}>
                {true ? 'Online' : 'Offline'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalItems={7}
        onChangePageNumber={setCurrentPage}
      />
    </MainLayout>
  );
};
