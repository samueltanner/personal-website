import { jobs } from "../../utils/constants";
import JobCard from "./JobCard";
import ExperienceCard from "./ExperienceCard";
import VerticalLine from "./VerticalLine";
import AddJobCard from "./AddJobCard";

const Timeline = (props) => {
  return (
    <div className="">
      <VerticalLine>
        <AddJobCard />
        {jobs.map((job, index) => (
          <JobCard job={job} key={index} index={index} selectJob={props.selectJob} />
        ))}
      </VerticalLine>
    </div>
  );
};

export default Timeline;
