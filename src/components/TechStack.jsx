import "../css/TechStack.css";

function TechStack() {
  const techStack = [
    { name: "HTML", icon: "icons/Techstack/HTML5.svg" },
    { name: "CSS", icon: "images/placeholder.png" },
    { name: "JavaScript", icon: "images/placeholder.png" },
    { name: "mySQL", icon: "images/placeholder.png" },
    { name: "vueJS", icon: "images/placeholder.png" },
  ];

  return (
    <aside className="myTechComponent">
      <div className="myTechHeader">
        <h4>My Tech Stack</h4>
      </div>

      <div className="myTechContent">
        {techStack.map((tech) => (
          <div className="myTechGridItem">
            <img src={tech.icon} alt="techIcon" className="techStackIcons" />
            <p className="techStackName">{tech.name}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default TechStack;
