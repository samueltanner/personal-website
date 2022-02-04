const RectangleButton = (props) => {
  
  return (
    <button
      onClick={props.onClick}
      className={`text-white font-bold py-2 px-4 rounded mt-2 drop-shadow-sm ${props.buttonType} `}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default RectangleButton;
