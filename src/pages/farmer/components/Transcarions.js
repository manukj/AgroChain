import axios from "axios";
import { useEffect, useState } from "react";
import image from "../../../images/seller.jpeg";
import { TEST_API_KEY } from "../../Constants";

var initalTranscation = [
  {
    id: "c25e9010-18f7-583c-bd9a-81b870be019e",
    blockchain: "MATIC-MUMBAI",
    tokenId: "e4f549f9-a910-59b1-b5cd-8f972871f5db",
    walletId: "91fb5452-d51d-5563-b5f9-ba317b9a8d28",
    sourceAddress: "0x6218ab52a6a9c4a0b3b4edb5c311ac7d31ec939a",
    destinationAddress: "0x3c014375174066dede995f7d16987be6ea368948",
    transactionType: "INBOUND",
    custodyType: "DEVELOPER",
    state: "COMPLETE",
    amounts: ["0.0011"],
    nfts: null,
    txHash:
      "0x85299c580fb23b7982f6ae06a0acaef8258e0f0913dd9a982e736ef5e909b948",
    blockHash:
      "0x9d522858919ad55bb55877e58290bbacbf2d702364702058cb5e7929227908c8",
    blockHeight: 42292767,
    networkFee: "0.000442382201415",
    firstConfirmDate: "2023-11-12T02:50:16Z",
    operation: "TRANSFER",
    abiParameters: null,
    createDate: "2023-11-12T02:50:16Z",
    updateDate: "2023-11-12T02:50:57Z",
  },
];

function TranscationHistory({ address }) {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTranscations] = useState(initalTranscation);

  function onClickOfTranscation(transcationHash) {
    const url = `https://mumbai.polygonscan.com/tx/${transcationHash}`;
    console.log(url);
    window.open(url, "_blank");
  }

  async function fetchTranscations() {
    const options = {
      method: "GET",
      url: "https://api.circle.com/v1/w3s/transactions",
      params: {
        blockchain: "MATIC-MUMBAI",
        destinationAddress: `${address}`,
        pageSize: "10",
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TEST_API_KEY}`,
      },
    };

    try {
      const { data } = await axios.request(options);
      console.log("response", data.data.transactions);
      setIsLoading(false);
      setTranscations(data.data.transactions);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchTranscations();
  }, []);

  if (isLoading) {
    return <div></div>;
  } else {
    return (
      <div className="flex flex-col">
        <div className="mt-5 text-lg font-bold mb-2">Transactions List</div>
        {transactions.map((data) => (
          <div
            onClick={() => {
              onClickOfTranscation(data.txHash);
            }}
            className="flex flex-row bg-base-300 rounded-lg p-5 place-content-between content-between w-full mt-2"
          >
            <div className="flex flex-row items-center">
              <img
                className="h-7 w-7 rounded-full  object-cover mr-2 border"
                src={image}
                alt="Random Image"
              ></img>
              <div className=" w-44 overflow-ellipsis overflow-hidden ">
                {data.txHash}
              </div>
            </div>
            <div className="flex items-baseline">
              <div className=" font-extrabold text-lg">{data.amounts} </div>
              <div className="text-xs pl-1 text-gray-500">MATIC</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TranscationHistory;
