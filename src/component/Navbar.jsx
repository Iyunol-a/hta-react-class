import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav">
        <div className="jay">Joan</div>
        
      <NavLink to="/" className="navlink">
        Home
      </NavLink>
      <NavLink to="about" className="navlink">
        About
      </NavLink>
      <NavLink to="service" className="navlink">
        Service
      </NavLink>
      <NavLink to="resume" className="navlink">
        Resume
      </NavLink>
      <NavLink to="contact" className="navlink">
        Contact
      </NavLink>
    </div>
  );
}

export default Navbar