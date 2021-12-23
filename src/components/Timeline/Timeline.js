import { jobs } from "../../utils/constants";
import JobCard from "./JobCard";
import ExperienceCard from "./ExperienceCard";
import VerticalLine from "./VerticalLine";

const Timeline = (props) => {
  return (
    // <div classNameName="flex flex-col items-center gap-2">
    //   {jobs.map((job, index) => (
    //     <ExperienceCard key={index} job={job} />
    //   ))}
    // </div>

    // <div class="relative wrap p-10 h-full">
    //   <div
    //     className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
    //     style={{ left: "50%" }}
    //   ></div>

    // </div>

    <VerticalLine>
      <JobCard job={jobs[0]} index="+" />
      {jobs.map((job, index) => (
        <JobCard job={job} key={index} index={index} />
      ))}
    </VerticalLine>
  );
};

export default Timeline;
