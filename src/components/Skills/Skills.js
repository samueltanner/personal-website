import { useState } from "react";
import { skills } from "../../utils/constants";
import SkillBubble from "../UI/SkillBubble";
import SkillsFilter from "./SkillsFilter";

const sortedSkills = skills.sort((a, b) => (a.score > b.score ? -1 : 1));

const Skills = (props) => {
  const [showAllSkills, setSkillFilter] = useState(true);
  const [currentSkills, setSkills] = useState(sortedSkills);

  const toggleSkills = () => {
    setSkillFilter(!showAllSkills);
    setSkills(!showAllSkills ? sortedSkills : sortedSkills.filter((skill) => skill.dev_skill === true));
  };

  return (
    <div className="flex flex-col md:mb-20 items-center">
      <div className="flex flex-wrap gap-2 mt-5 mx-3 justify-around">
        {currentSkills.map((skill, index) => (
          <SkillBubble skill={skill} key={index} />
        ))}
      </div>
      <SkillsFilter toggleSkills={toggleSkills} />
    </div>
  );
};

export default Skills;
