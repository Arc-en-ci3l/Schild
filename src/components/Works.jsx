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
      title: "Arc en ciel Hotel - Aug 2024",
      image: "images/placeholder.png",
      tech: "HTML5 | CSS3 | jQuery | PHP | mySQL",
      description:
        "A hotel room booking website for a fictional hotel. Made to apply what I have learnt during the semester in a full stack project [School Course Work]",
    },
    {
      id: 2,
      title: "Portfolio Website - Dec 2024",
      image: "icons/favicon.png",
      tech: "React | CSS3",
      description:
        "You're looking at it right now :> - With an interest in learning React, this website to showcase myself was developed with React libraries.",
    },
  ];

  const educationInfo = [
    {
      id: 2,
      school: "Nanyang Polytechnic",
      course: "Diploma in Infocomm & Media Engineering",
      duration: "2023 - 2026",
    },
    {
      id: 1,

      school: "Montfort Secondary School",
      course: "O Level Programme",
      duration: "2019 - 2022",
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
          {educationInfo.map((info) => (
            <Education info={info} key={info.id} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default MyWorks;
