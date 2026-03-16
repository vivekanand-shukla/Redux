import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import StudentView from "./features/students/StudentView"
import StudentDetail from "./features/students/StudentDetail"
import StudentForm from "./features/students/StudentForm"
import ClassView from "./pages/ClassView"
import SchoolView from "./features/school/SchoolView"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentView />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/add-student" element={<StudentForm />} />
        <Route path="/edit/:id" element={<StudentForm />} />
        <Route path="/classes" element={<ClassView />} />
        <Route path="/school" element={<SchoolView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
