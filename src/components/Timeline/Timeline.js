import { jobs } from "../../utils/constants";
import ExperienceCard from "./ExperienceCard";

const Timeline = (props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {jobs.map((job, index) => (
        <ExperienceCard key={index} job={job} />
      ))}
    </div>
  );
};

export default Timeline;
