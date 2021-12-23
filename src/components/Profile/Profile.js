import Card from "../UI/Card";
import ProfileCard from "./ProfileCard";
import ProfileImage from "./ProfileImage";

import { profile } from "../../utils/constants";

const Profile = (props) => {
  return (
    <Card className="bg-slate-200 drop-shadow-lg h-1/2">
      <ProfileImage />
      <ProfileCard profile={profile} className="bg-slate-500" />
    </Card>
  );
};

export default Profile;
