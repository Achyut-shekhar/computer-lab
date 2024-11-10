import styles from "./item.module.css";
const Item = ({ items }) => {
  return (
    <li className={`${styles.acitem} list-group-item`}>
      <span className={styles["acspan"]}>{items}</span>
    </li>
  );
};
export default Item;
