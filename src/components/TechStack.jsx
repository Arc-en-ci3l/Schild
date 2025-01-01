import "../css/TechStack.css";
import techStack from "../data/techStack.json";

function TechStack() {
  return (
    <aside className="myTechComponent">
      <div className="myTechHeader">
        <h4>My Tech Stack</h4>
      </div>

      <div className="myTechContent">
        {techStack.map((tech) => (
          <div className="myTechGridItem">
            <div className="techStackName">
              <span>{tech.name}</span>
              <span>{tech.percentage}</span>
            </div>
            <div className="percent_bar">
              <div className="bar_in" style={{ width: tech.percentage }}></div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default TechStack;
