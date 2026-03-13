import {BrowserRouter , Routes , Route} from "react-router-dom"
import Layout from "./Layout"

import Inventory from "./pages/Inventory"
import Removed from "./pages/Removed"
import Remaining from "./pages/Remaining"
import AddItems from "./pages/AddItems"

function App(){

  return(
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout/>}>

          <Route index element={<Inventory/>}/>
          <Route path="removed" element={<Removed/>}/>
          <Route path="remaining" element={<Remaining/>}/>
          <Route path="add" element={<AddItems/>}/>

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App