import { differenceInYears } from "date-fns";

import "../css/description.css";

function MyDescription() {
  const today = new Date();
  const birthDate = new Date("2006-07-16");
  const age = differenceInYears(today, birthDate);

  return (
    <header className="myDescriptionComponent">
      <div className="profilePicture"></div>
      <div className="personalDetails">
        <h1 className="nameHeader">
          Louis Sin <span className="ageHeader">{age} yrs old</span>
        </h1>
        <div className="countryOfOrigin">
          <img src="images/countryFlag.png" className="countryFlag" />
          <p className="countryName">Singapore, SG</p>
        </div>
        <p className="selfDescription">
          A full stack developer who likes to develop web applications, drink
          tea, coffee and consume anime content.
        </p>
      </div>
    </header>
  );
}

export default MyDescription;
