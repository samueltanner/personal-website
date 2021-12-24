const Card = (props) => {
  // return <div className={`rounded-md p-2 ${props.className}`}>{props.children}</div>;
  return <div className={`${props.className} rounded-md p-2 m-1`}>{props.children}</div>;
};

export default Card;
