import "../css/Description.css";

function MyDescription() {
  const currentDate = new Date();
  const birthDate = new Date("2006-07-16");
  let age = currentDate.getFullYear() - 2006;

  currentDate.getMonth() > birthDate.getMonth() &&
  currentDate.getDay() > birthDate.getDay()
    ? age //Birthday passed
    : (age -= 1); //Birthday haven't pass

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
          A full stack dev who likes to develop web applications, drink tea,
          coffee and consume anime content.
        </p>
      </div>
    </header>
  );
}

export default MyDescription;
