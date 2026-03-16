import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid px-3">
        <span   className="navbar-brand fw-semibold"> <NavLink to="/"   style={{ textDecoration: "none", color: "black" }} >Student Management System</NavLink> </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " fw-bold text-dark" : " text-secondary")}>
                Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/classes" className={({ isActive }) => "nav-link" + (isActive ? " fw-bold text-dark" : " text-secondary")}>
                Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/school" className={({ isActive }) => "nav-link" + (isActive ? " fw-bold text-dark" : " text-secondary")}>
                School
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
