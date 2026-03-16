import { useSelector, useDispatch } from "react-redux"
import { setFilter, setSortBy } from "../features/students/studentsSlice"

function avatarClass(gender) {
  if (gender === "Male")   return "ava-m"
  if (gender === "Female") return "ava-f"
  return "ava-n"
}

export default function ClassView() {
  const dispatch = useDispatch()
  const { students, filter, sortBy } = useSelector((s) => s.students)

  const handleFilterChange = (e) => dispatch(setFilter(e.target.value))
  const handleSortChange   = (e) => dispatch(setSortBy(e.target.value))

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
    <div className="page-wrap">
      <div className="page-head">
        <div>
          <h1 className="page-title">Class View</h1>
          <p className="page-sub">
            Showing {sorted.length} of {students.length} students
          </p>
        </div>
      </div>

      <div className="filter-strip">
        <div className="filter-group">
          <span className="filter-key">Filter by Gender:</span>
          <select className="f-select" value={filter} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Boys">Boys</option>
            <option value="Girls">Girls</option>
          </select>
        </div>

        <div className="filter-group">
          <span className="filter-key">Sort by:</span>
          <select className="f-select" value={sortBy} onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="marks">Marks</option>
            <option value="attendance">Attendance</option>
          </select>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="card-base">
          <div className="state-center">
            <div className="empty-ico">🔍</div>
            <div className="state-title">No students match this filter</div>
          </div>
        </div>
      ) : (
        <div className="card-base">
          {sorted.map((s, i) => (
            <div key={s._id} className="class-row">
              <span className="rank-num">{i + 1}</span>
              <div className={`ava ${avatarClass(s.gender)}`}>
                {s.name.charAt(0).toUpperCase()}
              </div>
              <div className="sr-info">
                <div className="sr-name">{s.name}</div>
                <div className="sr-meta">
                  {s.gender || "—"} · Grade {s.grade || "—"}
                </div>
              </div>
              <div className="class-stats">
                <div className="cs-block">
                  <div className="cs-val">
                    {s.marks != null ? s.marks : <span style={{ color: "#94a3b8" }}>—</span>}
                  </div>
                  <div className="cs-key">Marks</div>
                </div>
                <div className="cs-block">
                  <div className="cs-val">
                    {s.attendance != null ? s.attendance : <span style={{ color: "#94a3b8" }}>—</span>}
                  </div>
                  <div className="cs-key">Attend.</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
