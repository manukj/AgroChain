export const farmer_ = {
  name: 'John',
  address: 73248592,
  approved: false,
  amount: 500,
};


export const seller_ = {
  name: 'Jack',
  address: 348509235,
}

/*
function changeStatus(){
  farmer_.approved = true
  return (
    <p>Approved Status</p>
    )
}
*/

function UpcomingTransactions(){
  let transaction;
  if (!farmer_.approved) {
    transaction = 'From'+ farmer_.address+ 'is due' +farmer_.amount+'. To approve click here';
  }
  return(
    <div>
      <h2>
          Pending Transactions
        </h2>
        <p>
          {transaction}
          <button>
            APPROVE
          </button>
        </p>
    </div>
  )
}

function NewTransaction(){
  return (
    <div>
      <h2>
          New Transactions
        </h2>
        <p>
          <input type="number" id="myamount" value="amount in USD  "></input>
          <button>
            BID
          </button>
              to {farmer_.address}
        </p>
    </div>
  )
}

function Seller() {
    return (
      <div>
        <h1>Seller Page</h1>
        <p>Welcome to the Seller page.</p>
        <NewTransaction />
        <UpcomingTransactions/>
      </div>
    );
  }
  
  export default Seller;