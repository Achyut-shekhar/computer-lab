import Item from "./Item";
const Fooditem = ({ items }) => {
  return (
    <ul className="list-group ">
      {items.map((item) => (
        <Item key={item} items={item}></Item>
      ))}
    </ul>
  );
};
export default Fooditem;
