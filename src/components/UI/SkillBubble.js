const SkillBubble = (props) => {
  const color = (score) => {
    if (score === 5) {
      return "bg-emerald-400";
    }
    if (score === 4) {
      return "bg-lime-400";
    }
    if (score === 3) {
      return "bg-amber-300";
    }
    if (score >= 2) {
      return "bg-rose-400";
    }
  };

  return (
    <div className={`${color(props.skill.score)} rounded-3xl w-auto p-3 drop-shadow-md m-1`}>{props.skill.name}</div>
  );
};

export default SkillBubble;
