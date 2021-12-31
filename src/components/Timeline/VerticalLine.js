const VerticalLine = (props) => {
  return (
    <div className="relative wrap pt-0 pb-3 px-5 h-fill md:pb-10 scrollbar-hide">
      <div
        className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
        style={{ left: "50%" }}
      ></div>
      {props.children}
    </div>
  );
};

export default VerticalLine;
