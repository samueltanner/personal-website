const VerticalLine = (props) => {
  return (
    <div className="relative wrap p-5 pt-0 h-fill">
      <div
        className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
        style={{ left: "50%" }}
      ></div>
      {props.children}
    </div>
  );
};

export default VerticalLine;
