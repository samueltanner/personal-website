import Card from "../UI/Card";

const PortfolioCard = (props) => {
  return (
    <Card className="bg-slate-400 min-w-full whitespace-pre-line p-6">
      <ul>
        <li className="font-bold text-gray-800 text-l mb-2">{props.project.name}</li>
        <li className="italic text-slate-100 mb-2">{props.project.stack}</li>
        <li className="mb-2">{props.project.description}</li>
        <li>{props.project.link}</li>
        {/* <li>{props.project.status}</li> */}
        {props.project.repoLink.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </Card>
  );
};

export default PortfolioCard;
