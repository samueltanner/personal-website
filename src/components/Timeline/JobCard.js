import { Link, animateScroll as scroll } from "react-scroll";

const JobCard = (props) => {
  const direction = () => {
    let response = "";
    props.index % 2 === 0 ? (response = "right-timeline") : (response = "flex-row-reverse left-timeline");
    return response;
  };

  const onSelectJob = () => {
    if (props.showContactCard) props.toggleContact();

    props.selectJob(props.index);
  };

  return (
    <Link
      className={`mb-8 flex justify-between items-center w-full right-timeline group ${direction()}`}
      onClick={onSelectJob}
      activeClass="active"
      to="profile"
      spy={true}
      smooth={true}
      offset={300}
      duration={500}
    >
      <div className="order-1 w-5/12"></div>
      {/* <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full "> */}
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full group-hover:bg-gray-600">
        <h1 className="mx-auto font-semibold text-lg text-white cursor-default">{props.index + 1}</h1>
      </div>
      <div className="order-1 bg-slate-400 rounded-lg shadow-xl w-5/12 px-3 py-4 group-hover:bg-slate-200">
        <h3 className="mb-3 font-bold text-gray-800 text-l cursor-default">{props.job.title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 cursor-default">
          {props.job.company}
        </p>
      </div>
    </Link>
  );
};

export default JobCard;
