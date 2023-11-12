import axios from "axios";
import React, { useState } from "react";
import farmerImage from "../../../images/farmer.jpeg";

import {
  ENTITY_SECRET,
  FARMER_WALLET_ADDRESS,
  IDEMPOTENCY_KEY,
  SELLER_TOKEN_ID,
  SELLER_WALLET_ID,
  TEST_API_KEY,
} from "../../Constants";

function NewTransaction({ p_farmer }) {
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  async function createANewTransation() {
    const encryptCiper = await getEncryptedCiper();
    console.log("Calling Transation APi");
    const options = {
      method: "POST",
      url: "https://api.circle.com/v1/w3s/developer/transactions/transfer",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TEST_API_KEY}`,
      },
      data: {
        idempotencyKey: `${IDEMPOTENCY_KEY}`,
        entitySecretCipherText: `${encryptCiper}`,
        amounts: ["0.0011"],
        feeLevel: "HIGH",
        tokenId: `${SELLER_TOKEN_ID}`,
        walletId: `${SELLER_WALLET_ID}`,
        destinationAddress: `${FARMER_WALLET_ADDRESS}`,
      },
    };

    console.log("options", options);

    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getEncryptedCiper() {
    const url = "https://api.circle.com/v1/w3s/config/entity/publicKey";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TEST_API_KEY}`,
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      const publicKey = data.data.publicKey.trim();
      console.log("publicKey", data);

      const entitySecret = ENTITY_SECRET;

      const encryptCiper = await fetch("http://localhost:3001/encrypt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ entitySecret, publicKey }),
      });

      const result = await encryptCiper.json();
      console.log("result", result);

      return result.encryptedData;
    } catch (error) {
      console.error(error);
    }
  }

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
            <div className=" w-32 overflow-ellipsis overflow-hidden">
              {FARMER_WALLET_ADDRESS}
            </div>
          </div>
        </div>
      </p>
    </div>
  );
}

export default NewTransaction;
