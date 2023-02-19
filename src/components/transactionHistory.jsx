const TransactionHistory = ({ userData }) => {
    const transactions = userData.transactionHistory;

  return (
    <div>
        {
            transactions && transactions.map((item, id) => (
                <div key={id}>
                    <p>Location: { item.Location}</p>
                    <p>Total: ${ item.finalCostCents / 100}</p>
                    <p>Time: { item.time}</p>
                </div>
            ))
        }
    </div>
  );
};

export default TransactionHistory;