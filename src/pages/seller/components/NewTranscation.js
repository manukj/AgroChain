import React, { useState } from "react";

import { SELLER_WALLET_ID, TEST_API_KEY } from "../../Constants";
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
    <div>
      <h2>New Transactions</h2>
      <p>
        <input
          type="text"
          value={textFieldValue}
          onChange={handleTextFieldChange}
          id="myamount"
        ></input>
        <button
          onClick={() => {
            createANewTransation();
          }}
        >
          Hello WOrld
        </button>
        to {p_farmer.address}
      </p>
    </div>
  );
}

export default NewTransaction;
