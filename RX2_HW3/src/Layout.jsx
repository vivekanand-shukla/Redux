import {NavLink , Outlet} from "react-router-dom"

function Layout(){

  return(
    <div className="container">

      <ul>
        <li><NavLink to="/">Inventory</NavLink></li>
        <li><NavLink to="/removed">Removed Items</NavLink></li>
        <li><NavLink to="/remaining">Remaining Items</NavLink></li>
        <li><NavLink to="/add">Add New Items</NavLink></li>
      </ul>

      <Outlet/>

    </div>
  )
}

export default Layout