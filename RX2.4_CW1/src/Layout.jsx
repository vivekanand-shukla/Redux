import { NavLink, Outlet } from "react-router-dom";


function Layout() {
  return (
    <div className="container">
      <ul className="nav-links">
        <li>
          <NavLink to="/income">Income</NavLink>
        </li>
        <li>
          <NavLink to="/expenses">Expenses</NavLink>
        </li>
        <li>
          <NavLink to="/savings">Savings</NavLink>
        </li>
        <li>
          <NavLink to="/new-entry">New Entries</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Layout;