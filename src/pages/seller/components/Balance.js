import axios from "axios";
import React, { useEffect, useState } from "react";
import { TEST_API_KEY } from "./../../Constants.js";
function ShowBalance({ walletID, image }) {
  const [tokenBalance, setTokenBalance] = useState();
  const [isLoadingWallet, setIsLoadingWallet] = useState(true);

  async function getBalances() {
    console.log("getting wallet api");
    var getBalancesRequest = {
      method: "GET",
      url: `https://api.circle.com/v1/w3s/wallets/${walletID}/balances`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TEST_API_KEY}`,
      },
    };
    try {
      const { data } = await axios.request(getBalancesRequest);
      if (data.data.tokenBalances[0]) {
        setTokenBalance(data.data.tokenBalances[0]);
        setIsLoadingWallet(false);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    // getBalances();
  }, []);

  if (!isLoadingWallet) {
    return (
      <div className="h-28 w-64 flex flex-row items-center justify-between bg-gray-200 p-6 rounded-md text-center">
        <img
          className="h-24 w-24 rounded-full  object-cover"
          src={image}
          alt="Random Image"
        ></img>
        <div className=" flex flex-col">
          <p className="text-xs text-gray-600">Wallet Balance</p>
          <p className="text-sm text-gray-600">
            {tokenBalance.token.blockchain}
          </p>
          <p className="text-sm text-gray-600">{tokenBalance.amount}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-28 w-64 flex flex-row items-center justify-center bg-gray-200 p-6 rounded-md text-center">
        <span class="loading loading-bars loading-lg"></span>
      </div>
    );
  }
}
export default ShowBalance;
