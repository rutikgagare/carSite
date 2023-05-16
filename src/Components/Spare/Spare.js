import React from 'react';
import SpareSummary from './SpareSummary';
import AvailableSpare from './AvailableSpare';

const Spare = () => {
  return (
    <React.Fragment>
        <SpareSummary></SpareSummary>
        <AvailableSpare></AvailableSpare>
    </React.Fragment>
  )
}

export default Spare;