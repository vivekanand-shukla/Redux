import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { fetchStudents } from "./studentsSlice"
import StudentList from "./StudentList"

export default function StudentView() {
  const dispatch = useDispatch()
  const { students, status, error } = useSelector((s) => s.students)

  useEffect(() => {
    dispatch(fetchStudents())
  }, [dispatch])

  return (
    <div className="container mt-4">
      <h1>Student View</h1>

      <Link to="/add-student" className="btn btn-warning mb-3">
        Add student
      </Link>

      {status === "loading" && <p>Loading...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      <h2>Student List</h2>
      <StudentList students={students} />
    </div>
  )
}
