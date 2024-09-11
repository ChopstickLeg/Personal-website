import { NavLink as Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="col-md-12 text-center">
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <Link to="/about">About me</Link>
        </div>
        <div>
          <Link to="/projects">My Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
