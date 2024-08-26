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
          <p className="text-start">This will be the about me section</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
