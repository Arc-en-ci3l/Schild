import { useState } from "react";
import Education from "./Education";
import ProjectCard from "./ProjectCard";

import "../css/Works.css";

function MyWorks() {
  const [tabState, setTabState] = useState(0);

  const toggleTab = (index) => {
    setTabState(index);
  };

  const projectInfo = [
    {
      id: 1,
      title: "Hotel Website",
      image: "images/placeHolder.jpeg",
      tech: "HTML | CSS | jQuery | PHP | mySQL",
    },
    {
      id: 2,
      title: "Koufu Website",
      image: "images/placeHolder.jpeg",
      tech: "HTML | CSS | JS",
    },
  ];

  return (
    <article className="myWorksComponent">
      <div className="myWorksNav">
        <div
          onClick={() => toggleTab(0)}
          className={tabState === 0 ? "myWorksTab activeTab" : "myWorksTab"}
        >
          <h4>Recent Projects</h4>
        </div>
        <div
          onClick={() => toggleTab(1)}
          className={tabState === 1 ? "myWorksTab activeTab" : "myWorksTab"}
        >
          <h4>Education</h4>
        </div>
      </div>

      <div className="myWorksTabContent">
        <div
          className={
            tabState === 0 ? "myWorksContent activeContent" : "myWorksContent"
          }
        >
          {projectInfo.map((info) => (
            <ProjectCard info={info} key={info.id} />
          ))}
        </div>
        <div
          className={
            tabState === 1 ? "myWorksContent activeContent" : "myWorksContent"
          }
        >
          <Education />
        </div>
      </div>
    </article>
  );
}

export default MyWorks;
