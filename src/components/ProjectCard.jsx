import "../css/projectCard.css";

function ProjectCard({ info }) {
  return (
    <div className="projectCard">
      <div className="projectCardLeft">
        <img src={info.image} alt="projectImage" className="projectCardImage" />
        <div className="projectCardTech">{info.tech}</div>
      </div>
      <div className="projectCardRight">
        <h4>{info.title}</h4>
        <div className="divider"></div>
        <p>{info.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
