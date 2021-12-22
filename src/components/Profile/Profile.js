import Card from "./Card";
import ProfileImage from "./ProfileImage";

const Profile = (props) => {
  return (
    <div className="flex-initial w-64">
      <ProfileImage />
      <br></br>
      <Card title="sam tanner" body="software developer" />
    </div>
  );
};

export default Profile;
