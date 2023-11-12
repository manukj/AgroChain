import seller from "../../images/seller.jpeg";
import { SELLER_WALLET_ID } from "../Constants";
import ShowBalance from "./components/Balance";
import NewTransaction from "./components/NewTranscation";

export const farmer_ = {
  name: "John",
  address: 73248592,
  approved: false,
  amount: 500,
};

export const seller_ = {
  name: "Jack",
  address: 348509235,
};

/*
function changeStatus(){
  farmer_.approved = true
  return (
    <p>Approved Status</p>
    )
}
*/

function UpcomingTransactions() {
  let transaction;
  if (!farmer_.approved) {
    transaction =
      "From" +
      farmer_.address +
      "is due" +
      farmer_.amount +
      ". To approve click here";
  }
  return (
    <div>
      <h2>Pending Transactions</h2>
      <p>
        {transaction}
        <button>APPROVE</button>
      </p>
    </div>
  );
}

function Seller() {
  return (
    <div className="m-5">
      <div className="text-xl font-extrabold">Seller Details</div>
      <p>Welcome to the Seller page.</p>
      <ShowBalance walletID={SELLER_WALLET_ID} image={seller}></ShowBalance>
      <NewTransaction p_farmer={farmer_}></NewTransaction>
      <UpcomingTransactions />
    </div>
  );
}

export default Seller;
