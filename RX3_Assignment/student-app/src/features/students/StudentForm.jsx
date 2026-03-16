import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { addStudentAsync, updateStudentAsync } from "./studentsSlice"

export default function StudentForm() {
  const dispatch  = useDispatch()
  const navigate  = useNavigate()
  const location  = useLocation()
  const editing   = location.state   // student object passed via Link state

  const [name,       setName]       = useState(editing?.name       ?? "")
  const [age,        setAge]        = useState(editing?.age        ?? "")
  const [grade,      setGrade]      = useState(editing?.grade      ?? "")
  const [gender,     setGender]     = useState(editing?.gender     ?? "Male")
  const [attendance, setAttendance] = useState(editing?.attendance ?? "")
  const [marks,      setMarks]      = useState(editing?.marks      ?? "")
  const [errors,     setErrors]     = useState({})
  const [saving,     setSaving]     = useState(false)

  const validate = () => {
    const e = {}
    if (!name.trim())                                                e.name       = "Name is required"
    if (!age || isNaN(age) || Number(age) < 1)                      e.age        = "Enter a valid age"
    if (!grade.trim())                                               e.grade      = "Grade is required"
    if (attendance !== "" && (isNaN(attendance) || Number(attendance) < 0 || Number(attendance) > 100))
                                                                     e.attendance = "Must be 0–100"
    if (marks !== "" && (isNaN(marks) || Number(marks) < 0 || Number(marks) > 100))
                                                                     e.marks      = "Must be 0–100"
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSaving(true)

    const data = {
      name:   name.trim(),
      age:    Number(age),
      grade:  grade.trim(),
      gender,
      ...(attendance !== "" && { attendance: Number(attendance) }),
      ...(marks      !== "" && { marks:      Number(marks) }),
    }

    if (editing) {
      await dispatch(updateStudentAsync({ id: editing._id, updatedStudent: data }))
    } else {
      await dispatch(addStudentAsync(data))
    }

    navigate("/")
  }

  const Field = ({ label, value, onChange, placeholder, type = "text", error }) => (
    <div style={{ marginBottom: "1.25rem" }}>
      <label className="f-label">{label}</label>
      <input
        className="f-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div className="f-err">{error}</div>}
    </div>
  )

  return (
    <div className="page-wrap">
      <Link to="/" className="back-link">← Back to Students</Link>

      <div className="form-wrap">
        <h1 className="page-title" style={{ fontSize: "1.6rem", marginBottom: "0.25rem" }}>
          {editing ? "Edit Student" : "Add Student"}
        </h1>
        <p className="page-sub" style={{ marginBottom: "1.75rem" }}>
          {editing ? `Editing ${editing.name}` : "Fill in the details below"}
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <Field
            label="Name *"
            placeholder="e.g. Rahul Sharma"
            value={name}
            onChange={setName}
            error={errors.name}
          />
          <Field
            label="Age *"
            placeholder="e.g. 17"
            type="number"
            value={age}
            onChange={setAge}
            error={errors.age}
          />
          <Field
            label="Grade *"
            placeholder="e.g. A or 10"
            value={grade}
            onChange={setGrade}
            error={errors.grade}
          />

          <div style={{ marginBottom: "1.25rem" }}>
            <label className="f-label">Gender</label>
            <div className="gender-row">
              <label className={`gender-btn gm ${gender === "Male" ? "sel" : ""}`}>
                <input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={() => setGender("Male")}
                  style={{ display: "none" }}
                />
                ♂ Male
              </label>
              <label className={`gender-btn gf ${gender === "Female" ? "sel" : ""}`}>
                <input
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                  style={{ display: "none" }}
                />
                ♀ Female
              </label>
            </div>
          </div>

          <Field
            label="Attendance (0–100)"
            placeholder="e.g. 85"
            type="number"
            value={attendance}
            onChange={setAttendance}
            error={errors.attendance}
          />
          <Field
            label="Marks (0–100)"
            placeholder="e.g. 78"
            type="number"
            value={marks}
            onChange={setMarks}
            error={errors.marks}
          />

          <button
            type="submit"
            className="btn-sms btn-accent"
            style={{ width: "100%", justifyContent: "center", padding: "0.75rem", fontSize: "0.925rem" }}
            disabled={saving}
          >
            {saving ? "Saving…" : editing ? "Update Student" : "Add Student"}
          </button>
        </form>
      </div>
    </div>
  )
}
