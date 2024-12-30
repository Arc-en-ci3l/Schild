import "../css/TechStack.css";

function TechStack() {
  const techStack = [
    { name: "HTML5 & CSS3", percentage: "90%" },
    { name: "JavaScript, jQuery", percentage: "75%" },
    { name: "PHP", percentage: "65%" },
    { name: "Vue.js", percentage: "65%" },
    { name: "React", percentage: "40%" },
    { name: "C#, ASP.NET", percentage: "40%" },
    { name: "Dart & Flutter", percentage: "50%" },
    { name: "Python", percentage: "50%" },
    { name: "Java, Selenium, jUnit", percentage: "65%" },
    { name: "mySQL, SQL", percentage: "60%" },
    { name: "Adobe Ai, XD, Ps", percentage: "55%" },
    { name: "Adobe Premiere Pro", percentage: "30%" },
  ];

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
