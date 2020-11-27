import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';

const CheckInList = ({ list }) => {
  return (
    <div>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
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
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan='2'>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </Fragment>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CheckInList;
