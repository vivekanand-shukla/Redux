import { Link } from "react-router-dom"

function avatarClass(gender) {
  if (gender === "Male")   return "ava-m"
  if (gender === "Female") return "ava-f"
  return "ava-n"
}

export default function StudentList({ students }) {
  if (!students || students.length === 0) {
    return (
      <div className="card-base">
        <div className="state-center">
          <div className="empty-ico">🎓</div>
          <div className="state-title">No students yet</div>
          <div className="state-sub">Add a student to get started.</div>
        </div>
      </div>
    )
  }

  return (
    <div className="card-base">
      {students.map((s) => (
        <Link key={s._id} to={`/students/${s._id}`} className="student-row">
          <div className={`ava ${avatarClass(s.gender)}`}>
            {s.name ? s.name.charAt(0).toUpperCase() : "?"}
          </div>
          <div className="sr-info">
            <div className="sr-name">{s.name}</div>
            <div className="sr-meta">
              Age {s.age ?? "—"}&nbsp;&nbsp;·&nbsp;&nbsp;
              {s.gender || "—"}&nbsp;&nbsp;·&nbsp;&nbsp;
              Grade {s.grade || "—"}
            </div>
          </div>
          {s.grade && <div className="grade-pill">{s.grade}</div>}
          <span className="row-arrow">›</span>
        </Link>
      ))}
    </div>
  )
}
