import { jobs } from "../../utils/constants";
import JobCard from "./JobCard";
import VerticalLine from "./VerticalLine";
import AddJobCard from "./AddJobCard";
import { Link } from "react-scroll";

const Timeline = (props) => {
  return (
    <div className="">
      <VerticalLine>
        <Link activeClass="active" to="profile" spy={true} smooth={true} offset={300} duration={500}>
          <AddJobCard toggleContact={props.toggleContact} showContactCard={props.showContactCard} />
        </Link>

        {jobs.map((job, index) => (
          <JobCard
            job={job}
            key={index}
            index={index}
            selectJob={props.selectJob}
            className="cursor-default"
            toggleContact={props.toggleContact}
            showContactCard={props.showContactCard}
          />
        ))}
      </VerticalLine>
    </div>
  );
};

export default Timeline;
