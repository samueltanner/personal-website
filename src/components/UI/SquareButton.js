const SquareButton = (props) => {
  return (
    <button
      className="flex justify-center items-center bg-white rounded h-8 w-8 drop-shadow-sm hover:drop-shadow-md"
      onClick={props.onClick}
    >
      <div className="">{props.icon}</div>
    </button>
  );
};

export default SquareButton;
