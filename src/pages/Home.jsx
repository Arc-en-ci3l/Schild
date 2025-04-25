import Description from "../components/Description";
import Socials from "../components/Socials";
import TechStack from "../components/TechStack";
import Works from "../components/Works";

import "../css/home.css";

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
