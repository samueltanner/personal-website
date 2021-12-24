import Card from "../UI/Card";
import ProfileCard from "./ProfileCard";
import ProfileImage from "./ProfileImage";

import { profile } from "../../utils/constants";

const Profile = (props) => {
  return (
    <Card className="bg-slate-200 drop-shadow-lg h-2/5">
      <ProfileImage className="" />
      <div className="flex flex-wrap">
        <p className="font-bold ml-2">{profile.name}</p>
        <p className="italic ml-2"> | {profile.title}</p>
      </div>
      <p className=" ml-2">"{profile.blurb}"</p>
    </Card>
  );
};

export default Profile;
