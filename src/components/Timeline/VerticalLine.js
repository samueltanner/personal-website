const VerticalLine = (props) => {
  return (
    <div className="relative wrap p-3 pt-0 h-fill md:pb-10">
      <div
        className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
        style={{ left: "50%" }}
      ></div>
      {props.children}
    </div>
  );
};

export default VerticalLine;
