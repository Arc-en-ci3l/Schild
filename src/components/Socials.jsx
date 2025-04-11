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
            src="icons/LinkedInIcon.svg"
            alt="linkedIn_Icon"
            className="socialLinksIcon"
          />
        </a>
        <a
          href="https://github.com/Arc-en-ci3l"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
        >
          <img
            src="icons/GitHubIcon.svg"
            alt="GitHub_Icon"
            className="socialLinksIcon"
          />
        </a>
        <a
          href="mailto:4rc@arcenciel.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
        >
          <img
            src="icons/emailIcon.png"
            alt="Email_Icon"
            className="socialLinksIcon"
          />
        </a>
      </div>

      <button className="downloadResumeBtn">
        <a
          href="documents/Louis_Sin.pdf"
          download="Louis_Sin.pdf"
          rel="noopener noreferrer"
          className="downloadResumeLink"
        >
          Resume
          <img
            src="icons/downloadIcon.svg"
            alt="Download_Icon"
            className="downloadIcon"
          />
        </a>
      </button>
    </div>
  );
}

export default Socials;
