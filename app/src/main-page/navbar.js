import { NavLink as Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="col-md-12 text-center">
      <Link to="/about">About me&emsp;</Link>

      <Link to="/projects">My Projects</Link>
    </div>
  );
};

export default NavigationBar;
