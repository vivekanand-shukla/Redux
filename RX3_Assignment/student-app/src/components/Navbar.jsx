import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="sms-navbar">
      <div className="sms-navbar-inner">
        <NavLink to="/" className="sms-brand">
          Student<span className="sms-brand-dot">MS</span>
        </NavLink>
        <ul className="sms-nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => "sms-nav-link" + (isActive ? " active" : "")}>
              Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes" className={({ isActive }) => "sms-nav-link" + (isActive ? " active" : "")}>
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/school" className={({ isActive }) => "sms-nav-link" + (isActive ? " active" : "")}>
              School
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
