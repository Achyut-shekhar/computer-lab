const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h2>I am still hungry</h2>}</>;
};
export default ErrorMessage;
