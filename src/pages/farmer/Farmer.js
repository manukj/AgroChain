import React from "react";
import farmerimage from "../../images/farmer.jpeg";
import { FARMER_WALLET_ADDRESS, FARMER_WALLET_ID } from "../Constants.js";
import { farmer_, seller_ } from "../seller/Seller.js";
import ShowBalance from "../seller/components/Balance.js";
import TranscationHistory from "./components/Transcarions.js";

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
      <p>Welcome to the Farmer page.</p>
      <ShowBalance
        walletID={FARMER_WALLET_ID}
        image={farmerimage}
      ></ShowBalance>
      <TranscationHistory address={FARMER_WALLET_ADDRESS} />
    </div>
  );
}

export default Farmer;
