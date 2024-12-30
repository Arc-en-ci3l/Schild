import "../css/TechStack.css";

function TechStack() {
  const techStack = [
    { name: "HTML", icon: "icons/Techstack/HTML5.svg" },
    { name: "CSS", icon: "icons/Techstack/CSS3.svg" },
    { name: "Javascript", icon: "icons/Techstack/JavaScript.svg" },
    { name: "NodeJS", icon: "icons/Techstack/NodeJS.svg" },
    { name: "Vue.js", icon: "icons/Techstack/VueJS.svg" },
    { name: "mySQL", icon: "icons/Techstack/mySQL.svg" },
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
