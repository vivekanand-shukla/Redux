import { useSelector, useDispatch } from "react-redux"
import { setFilter, setSortBy } from "../features/students/studentsSlice"

export default function ClassView() {
  const dispatch = useDispatch()
  const { students, filter, sortBy } = useSelector((s) => s.students)

  const filtered = students.filter((s) => {
    if (filter === "Boys")  return s.gender === "Male"
    if (filter === "Girls") return s.gender === "Female"
    return true
  })

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "name")       return a.name.localeCompare(b.name)
    if (sortBy === "marks")      return (b.marks || 0)      - (a.marks || 0)
    if (sortBy === "attendance") return (b.attendance || 0) - (a.attendance || 0)
    return 0
  })

  return (
    <div className="container mt-4">
      <h1>Class View</h1>

      <div className="mb-2">
        <label className="me-2">Filter by Gender:</label>
        <select
          className="form-select d-inline-block w-auto"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        >
          <option value="All">All</option>
          <option value="Boys">Boys</option>
          <option value="Girls">Girls</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="me-2">Sort by:</label>
        <select
          className="form-select d-inline-block w-auto"
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
        >
          <option value="name">Name</option>
          <option value="marks">Marks</option>
          <option value="attendance">Attendance</option>
        </select>
      </div>

      <ul>
        {sorted.map((s) => (
          <li key={s._id}>
            {s.name} - {s.gender} - Marks: {s.marks ?? "Unknown"} - Attendance: {s.attendance ?? "Unknown"}
          </li>
        ))}
      </ul>
    </div>
  )
}
