import {BrowserRouter,Routes,Route} from "react-router-dom"

import StudentView from "./feature/students/StudentView"
import StudentDetail from "./feature/students/StudentDetail"
import ClassView from "./pages/ClassView"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<StudentView/>}/>
<Route path="/students/:id" element={<StudentDetail/>}/>
<Route path="/classes" element={<ClassView/>}/>

</Routes>

</BrowserRouter>

)

}

export default App