import React from 'react';
import { farmer_, seller_ } from './Seller';

function PendingTransaction(){
  let message;
  if (!farmer_.approved){
    message = 'You are due' + farmer_.amount + 'from' + seller_.address
  }
  return (
    <div>
      <h2>
        Pending Transactions
      </h2>
      {message}
    </div>
  )
}

function Farmer() {
  return (
    <div>
      <h1>Farmer Details</h1>
      <p>Welcome to the farmer page.</p>
      <PendingTransaction/>
    </div>
  );
}

export default Farmer;
