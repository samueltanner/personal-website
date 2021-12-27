const RectangleButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-blue-500 mt-2 drop-shadow-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default RectangleButton;
