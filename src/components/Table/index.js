import React from 'react';

export default ({ data = [], row = [] }) => {
  return (
    <>
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
          {/* {data.map((item) => (
            <tr>
              <td>{Faker.random.number()}</td>
              <td>{Faker.name.firstName()}</td>
              <td>{Faker.name.lastName()}</td>
              <td>{Faker.name.prefix()}</td>
              <td>{Faker.phone.phoneNumberFormat()}</td>
              <td>{Faker.name.jobType()}</td>
              <td>{Faker.address.state()}</td>
              <td
                className={
                  Faker.random.boolean() ? 'u-textPositive' : 'u-textGray'
                }
              >
                {Faker.random.boolean() ? 'Online' : 'Offline'}
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  );
};
