import { Link } from "react-router-dom"

export default function StudentList({ students }) {
  if (!students || students.length === 0) {
    return <p className="text-muted">No students found.</p>
  }

  return (
    <ul>
      {students.map((s) => (
        <li key={s._id}>
          <Link to={`/students/${s._id}`}>
            {s.name} (Age: {s.age})
          </Link>
        </li>
      ))}
    </ul>
  )
}
