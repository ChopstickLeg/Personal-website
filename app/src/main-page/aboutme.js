import headshot from "./headshot.jpg";
const AboutMe = () => {
  return (
    <div>
      <div className="row aboutMeTitle">
        <h3 className="col-md-12 text-center">About Me</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-5 d-flex justify-content-end">
          <img src={headshot} className="headshot" alt="headshot" />
        </div>
        <div className="col-md-5 d-flex " style={{ paddingLeft: "2%" }}>
          <p className="text-start">
            For the past year I have been a Software Developer at Amwins Group,
            where I work on the Application Support Team. We primarily work on
            data requests using SQL Server, as well as bug fixes and small
            feature requests on our internal ASP .NET website. I attended
            Gardner-Webb University for 4 years where I got my degree in
            Computer Science with a concentration in Programming and a minor in
            Computer Information Systems. In my free time, I enjoy going to the
            gym, playing video games with friends, and experimenting with new
            programming languages and frameworks. I am passionate about
            continuous learning and always look for opportunities to improve my
            skills and knowledge in the field of software development.
          </p>
        </div>
      </div>
      <div className="row skillsTitle" style={{ marginTop: "2rem" }}>
        <h3 className="col-md-12 text-center">Skills & Technologies</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-8 d-flex justify-content-center">
          <ul className="text-center">
            <li>Python</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>SQL Server</li>
            <li>ASP .NET</li>
            <li>HTML & CSS</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
      <div className="row contactTitle" style={{ marginTop: "2rem" }}>
        <h3 className="col-md-12 text-center">Contact Information</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-5 d-flex justify-content-center">
          <p className="text-center">
            I can be reached by email at{" "}
            <a href="mailto:hayden@hcarpenter.net">hayden@hcarpenter.net</a>
          </p>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: "1rem" }}
      >
        <div className="col-md-5 d-flex justify-content-center">
          <p className="text-center">
            Connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/h-carpenter-1010/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/ChopstickLeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
