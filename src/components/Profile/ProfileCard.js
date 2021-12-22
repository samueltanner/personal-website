import Card from "../UI/Card";

const ProfileCard = (props) => {
  return (
    // <Card className={`bg-slate-400 ${props.className}`}>
    <Card className="bg-slate-100">
      <ul>
        <li>{props.profile.name}</li>
        <li>{props.profile.email}</li>
        <li>{props.profile.phone}</li>
        <li>{props.profile.blurb}</li>
      </ul>
    </Card>
  );
};

export default ProfileCard;
