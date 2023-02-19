import styles from "@/styles/Study.module.css";
import transactionItem from "./transactionItem";

const transactionHistory = ({ transactions }) => {
    console.log(transactions);
    const transactionItems = transactions.map((item) =>
    <div>
        <li>Location: {item.location}</li>
        <li>Total: {item.finalPriceCents / 100}</li>
        <li>Time: {item.time}</li>
    </div>
    );
    console.log("hello??");
  return (
    <div>
        {transactionItems}
    </div>
  );
};

export default transactionHistory;