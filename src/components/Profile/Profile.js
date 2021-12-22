import Card from "../UI/Card";
import ProfileCard from "./ProfileCard";
import ProfileImage from "./ProfileImage";

import { profile } from "../../utils/constants";

const Profile = (props) => {
  return (
    <Card className="bg-slate-200 drop-shadow-lg">
      <ProfileImage />
      <br></br>
      <ProfileCard profile={profile} className="bg-slate-500" />
      {/* <ProfileCard title="sam tanner" body="software developer" className="bg-slate-500" />
      <ProfileCard title="sam tanner" body="software developer" className="bg-slate-500" /> */}
    </Card>
  );
};

export default Profile;
