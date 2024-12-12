import Description from "../components/Description";
import Works from "../components/Works";
import Socials from "../components/Socials";
import Proficiencies from "../components/Proficiencies";

import "../css/home.css";

function Home() {
  return (
    <div className="homePage">
      <Description />
      <Socials />
      <Works />
      <Proficiencies />
    </div>
  );
}

export default Home;
