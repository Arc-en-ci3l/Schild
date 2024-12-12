import { useState } from "react";
import Education from "./Education";
import Projects from "./Projects";

import "../css/Works.css";

function MyWorks() {
  const [tabState, setTabState] = useState(1);

  const toggleTab = (index) => {
    setTabState(index);
  };

  return (
    <article className="myWorksComponent">
      <div className="myWorksNav">
        <div
          onClick={() => toggleTab(0)}
          className={tabState === 0 ? "myWorksTab activeTab" : "myWorksTab"}
        >
          <h4>Projects</h4>
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
          <Projects />
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
