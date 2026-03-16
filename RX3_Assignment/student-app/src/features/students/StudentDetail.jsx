import { useParams, Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { deleteStudentAsync } from "./studentsSlice"

export default function StudentDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const student = useSelector((state) =>
    state.students.students.find((s) => s._id === id)
  )

  if (!student) {
    return (
      <div className="container mt-4">
        <p>Student not found.</p>
        <Link to="/">Back</Link>
      </div>
    )
  }

  const handleDelete = () => {
    dispatch(deleteStudentAsync(id))
    navigate("/")
  }

  return (
    <div className="container mt-4">
      <h1>Student Detail</h1>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      <p>Attendance: {student.attendance ?? "N/A"}</p>
      <p>Marks: {student.marks ?? "N/A"}</p>

      <Link
        to={`/edit/${id}`}
        state={student}
        className="btn btn-warning me-2"
      >
        Edit Details
      </Link>

      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}
