import "../css/education.css";

function Education({ info }) {
  return (
    <>
      <div className="educationCard">
        <div className="educationDetails">
          <h4>{info.school}</h4>
          <p>{info.course}</p>
        </div>
        <div className="educationDuration">{info.duration}</div>
      </div>
      <div className="divider"></div>
    </>
  );
}

export default Education;
