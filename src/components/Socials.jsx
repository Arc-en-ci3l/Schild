import "../css/Socials.css";

function Socials() {
  return (
    <div className="mySocialsComponent">
      <div className="socialLinksContainer">
        <a
          href="https://www.linkedin.com/in/louisraphaelsin/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
        >
          <img
            src="/assets/icons/LinkedInIcon.svg"
            className="socialLinksIcon"
          />
        </a>
        <a
          href="https://github.com/Arc-en-ci3l"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
        >
          <img src="/assets/icons/GitHubIcon.svg" className="socialLinksIcon" />
        </a>
        <a
          href="mailto:4rc@arcenciel.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
        >
          <img src="/assets/icons/emailIcon.png" className="socialLinksIcon" />
        </a>
      </div>

      <button className="downloadResumeBtn">
        <a
          href="/assets/documents/myResume.pdf"
          download="myResume.pdf"
          rel="noopener noreferrer"
          className="downloadResumeLink"
        >
          Resume
          <img src="/assets/icons/downloadIcon.png" className="downloadIcon" />
        </a>
      </button>
    </div>
  );
}

export default Socials;
