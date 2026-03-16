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
    <div className="page-wrap">
      <div className="page-head">
        <div>
          <h1 className="page-title">Student View</h1>
          <p className="page-sub">
            {students.length > 0
              ? `${students.length} students enrolled`
              : "Manage your students"}
          </p>
        </div>
        <Link to="/add-student" className="btn-sms btn-gold">
          + Add Student
        </Link>
      </div>

      {status === "loading" && (
        <div className="state-center">
          <div className="spinner" />
          <div className="state-sub">Fetching students…</div>
        </div>
      )}

      {error && <div className="alert-err">⚠️ {error}</div>}

      {status !== "loading" && (
        <>
          <div className="section-label">Student List</div>
          <StudentList students={students} />
        </>
      )}
    </div>
  )
}
