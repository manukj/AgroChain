import React, { useState } from "react";
import farmerImage from "../../../images/farmer.jpeg";

import {
  FARMER_WALLET_ADDRESS,
  SELLER_WALLET_ID,
  TEST_API_KEY,
} from "../../Constants";
const getBalances = {
  method: "GET",
  url: `https://api.circle.com/v1/w3s/wallets/${SELLER_WALLET_ID}/balances`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TEST_API_KEY}`,
  },
};

function NewTransaction({ p_farmer }) {
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  async function createANewTransation() {}

  return (
    <div className="mt-10">
      <h2 className="my-3">New Transactions</h2>
      <p>
        <input
          type="text"
          className="input input-bordered w-full mb-2 "
          value={textFieldValue}
          onChange={handleTextFieldChange}
          id="myamount"
        ></input>
        <div className="flex flex-row">
          <button
            class="btn btn-primary m-1 w-32 h-14"
            onClick={() => {
              createANewTransation();
            }}
          >
            BID to
          </button>
          <div className="flex flex-row m-1 h-14 w-full p-2 bg-slate-600 rounded items-center border">
            <img
              className="h-12 w-12 rounded-full  object-cover mr-2"
              src={farmerImage}
              alt="Random Image"
            ></img>
            <div className=" w-32 overflow-ellipsis overflow-hidden">{FARMER_WALLET_ADDRESS}</div>
          </div>
        </div>
      </p>
    </div>
  );
}

export default NewTransaction;
