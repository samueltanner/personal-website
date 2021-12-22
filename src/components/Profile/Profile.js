import Card from "./Card";
import ProfileImage from "./ProfileImage";

const Profile = (props) => {
  return (
    <div className="bg-slate-100 p-3 rounded-lg drop-shadow-lg h-1/2">
      <ProfileImage />
      <br></br>
      <Card title="sam tanner" body="software developer" />
    </div>
  );
};

export default Profile;
