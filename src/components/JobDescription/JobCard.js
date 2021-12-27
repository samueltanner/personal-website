import Card from "../UI/Card";
import { jobs } from "../../utils/constants";

const JobCard = (props) => {
  const job = jobs[props.currentJob];
  return (
    <Card className="bg-slate-200 h-1/2 drop-shadow-lg ">
      <p className="font-bold ml-2"> {job.title} </p>
      <p className="italic ml-2">
        {job.company} | {job.start_date}-{job.end_date}
      </p>
      <Card className="bg-slate-100 overflow-y-scroll h-5/6 text-md">
        <ul>
          {job.activities.map((activity, index) => (
            <li key={index}>• {activity}</li>
          ))}
        </ul>
      </Card>
    </Card>
  );
};

export default JobCard;
