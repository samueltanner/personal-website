const Card = (props) => {
  return (
    <div className="bg-slate-300 text-white rounded-md p-2 drop-shadow-lg">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
};

export default Card;
