import styles from "@/styles/Study.module.css";

const transactionItem = ({ item }) => {
    const location = item.location;
    const price = item.finalPriceCents /100;
    const time = item.time;

  return (
    <div>
        Location: {location}
        Cost: {price}
        Date: {time}
    </div>
  );
};

export default transactionItem;