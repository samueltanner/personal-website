import Card from "../UI/Card";

const BreedCard = (props) => {
  return (
    <Card className="bg-[#606060] text-center w-60">
      <div className="text-white">{props.name}</div>
    </Card>
  );
};

export default BreedCard;
