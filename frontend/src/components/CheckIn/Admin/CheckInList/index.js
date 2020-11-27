import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';

const CheckInList = ({ list }) => {
  return (
    <div>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Check-In At</th>
            <th>Full Name</th>
            <th>NRIC</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          {list && list.length === 0 ? (
            <tr>
              <td colSpan='4' className='text-center'>
                No Check-Ins
              </td>
            </tr>
          ) : (
            <Fragment>
              {list.map(({ _id, fullName, nric, temperature, createdAt }) => (
                <tr key={_id}>
                  <td>{createdAt}</td>
                  <td>{fullName}</td>
                  <td>{nric}</td>
                  <td>{temperature}</td>
                </tr>
              ))}
            </Fragment>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CheckInList;
