import React from "react";
import farmerimage from "../../images/farmer.jpeg";
import { SELLER_WALLET_ID } from "../Constants.js";
import { farmer_, seller_ } from "../seller/Seller.js";
import ShowBalance from "../seller/components/Balance.js";

function PendingTransaction() {
  let message;
  if (!farmer_.approved) {
    message = "You are due" + farmer_.amount + "from" + seller_.address;
  }
  return (
    <div>
      <h2>Pending Transactions</h2>
      {message}
    </div>
  );
}

function Farmer() {
  return (
    <div className="m-5">
      <div className="text-xl font-extrabold">Farmer Details</div>
      <p>Welcome to the Seller page.</p>
      <ShowBalance
        walletID={SELLER_WALLET_ID}
        image={farmerimage}
      ></ShowBalance>
      <PendingTransaction />
    </div>
  );
}

export default Farmer;
