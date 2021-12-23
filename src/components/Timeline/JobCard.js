const JobCard = (props) => {
  const direction = () => {
    let response = "";
    props.index % 2 === 0 ? (response = "right-timeline") : (response = "flex-row-reverse left-timeline");

    return response;
  };

  return (
    <div className={`mb-8 flex justify-between items-center w-full right-timeline ${direction()}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{props.index + 1}</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">{props.job.title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{props.job.company}</p>
      </div>
    </div>
  );
};

export default JobCard;
