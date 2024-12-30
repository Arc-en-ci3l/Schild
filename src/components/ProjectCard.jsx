import "../css/ProjectCard.css";

function ProjectCard({ info }) {
  return (
    <div className="projectCard">
      <img src={info.image} alt="projectImage" className="projectCardImage" />

      <div className="projectCardDetails">
        <h4>{info.title}</h4>
        <div className="projectCardTech">{info.tech}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
