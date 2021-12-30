const AddJobCard = (props) => {
  return (
    <div
      className="mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline group pt-7 cursor-default"
      onClick={!props.showContactCard ? props.toggleContact : null}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-10 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">+</h1>
      </div>
      <div className="order-1 bg-teal-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:bg-teal-200">
        <h3 className="mb-3 font-bold text-gray-800 text-l">Hire Me!</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">I could work for you next</p>
      </div>
    </div>
  );
};

export default AddJobCard;
