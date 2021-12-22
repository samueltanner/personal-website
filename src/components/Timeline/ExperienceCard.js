import Card from "../UI/Card";

const ExperienceCard = (props) => {
  return (
    <Card className="bg-slate-200 drop-shadow-md md:min-w-full">
      <p className="font-bold"> {props.job.title} </p>
      <p className="italic">
        {props.job.company} | {props.job.start_date}-{props.job.end_date}
      </p>
      <ul>
        {props.job.activities.map((activity, index) => (
          <li key={index}>• {activity}</li>
        ))}
      </ul>
    </Card>
  );
};

export default ExperienceCard;
