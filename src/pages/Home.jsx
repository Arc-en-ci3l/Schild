import Description from "../components/Description";
import Works from "../components/Works";
import Socials from "../components/Socials";
import TechStack from "../components/TechStack";

import "../css/Home.css";

function Home() {
  return (
    <div className="homePage">
      <Description />
      <Socials />
      <Works />
      <TechStack />
    </div>
  );
}

export default Home;
