import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { deleteStudentAsync } from "./studentsSlice"

function avatarClass(gender) {
  if (gender === "Male")   return "ava-m"
  if (gender === "Female") return "ava-f"
  return "ava-n"
}

function ProgressRow({ label, value }) {
  if (value == null) {
    return (
      <div className="detail-row">
        <span className="d-key">{label}</span>
        <span className="d-val">—</span>
      </div>
    )
  }
  return (
    <div className="detail-row">
      <span className="d-key">{label}</span>
      <div className="prog-wrap">
        <div className="prog-top">
          <span className="prog-num">{value}</span>
          <span className="prog-pct">{value}/100</span>
        </div>
        <div className="prog-bar">
          <div className="prog-fill" style={{ width: `${Math.min(value, 100)}%` }} />
        </div>
      </div>
    </div>
  )
}

export default function StudentDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const student = useSelector((state) =>
    state.students.students.find((s) => s._id === id)
  )

  if (!student) {
    return (
      <div className="page-wrap">
        <Link to="/" className="back-link">← Back to Students</Link>
        <div className="card-base">
          <div className="state-center">
            <div className="empty-ico">🔍</div>
            <div className="state-title">Student not found</div>
            <div className="state-sub">This student may have been deleted.</div>
          </div>
        </div>
      </div>
    )
  }

  const handleDelete = () => {
    dispatch(deleteStudentAsync(id))
    navigate("/")
  }

  const ac = avatarClass(student.gender)

  return (
    <div className="page-wrap">
      <Link to="/" className="back-link">← Back to Students</Link>

      <div className="page-head" style={{ alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            className={`ava ${ac}`}
            style={{ width: 56, height: 56, borderRadius: 14, fontSize: "1.3rem" }}
          >
            {student.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="page-title" style={{ marginBottom: 0 }}>{student.name}</h1>
            <p className="page-sub">
              {student.gender || "—"} · Grade {student.grade || "—"}
            </p>
          </div>
        </div>
      </div>

      <div className="detail-card">
        <div className="detail-row">
          <span className="d-key">Name</span>
          <span className="d-val">{student.name}</span>
        </div>
        <div className="detail-row">
          <span className="d-key">Age</span>
          <span className="d-val">{student.age ?? "—"}</span>
        </div>
        <div className="detail-row">
          <span className="d-key">Grade</span>
          <span className="d-val">{student.grade || "—"}</span>
        </div>
        <div className="detail-row">
          <span className="d-key">Gender</span>
          <span className="d-val">{student.gender || "—"}</span>
        </div>
        <ProgressRow label="Attendance" value={student.attendance} />
        <ProgressRow label="Marks"      value={student.marks} />
      </div>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        <Link to={`/edit/${id}`} state={student} className="btn-sms btn-gold">
          ✏️ Edit Details
        </Link>
        <button className="btn-sms btn-danger" onClick={() => setShowModal(true)}>
          🗑 Delete
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-title">Delete student?</div>
            <div className="modal-body">
              Are you sure you want to delete <strong>{student.name}</strong>?
              This action cannot be undone.
            </div>
            <div className="modal-actions">
              <button
                className="btn-sms btn-outline"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn-sms btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
