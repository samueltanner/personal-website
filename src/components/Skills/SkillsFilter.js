const SkillsFilter = (props) => {
  const handleFilterSkills = () => {
    props.toggleSkills();
  };

  return (
    <div className="py-3 md:pb-0 ">
      <input type="checkbox" id="skills-filter" onClick={handleFilterSkills} />
      <label htmlFor="skills-filter" className="px-3">
        Show only software skills
      </label>
    </div>
  );
};

export default SkillsFilter;
