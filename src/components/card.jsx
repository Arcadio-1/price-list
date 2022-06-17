const Card = (props) => {
  const clases = props.className + " card";
  // const keys = props.key;
  return <div className={clases}>{props.children}</div>;
};
export default Card;
