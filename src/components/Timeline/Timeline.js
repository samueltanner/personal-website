import { jobs } from "../../utils/constants";
import JobCard from "./JobCard";
import VerticalLine from "./VerticalLine";
import AddJobCard from "./AddJobCard";

const Timeline = (props) => {
  return (
    <div className="">
      <VerticalLine>
        <AddJobCard toggleContact={props.toggleContact} />

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
