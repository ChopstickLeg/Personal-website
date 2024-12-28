import { NavLink as Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/about">About me</Link>
        <Link to="/projects">My Projects</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
