import { NavLink as Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Link to="/about">about</Link>
      <Link to="/home">home</Link>
    </div>
  );
};

export default NavigationBar;
