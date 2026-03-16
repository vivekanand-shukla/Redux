import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { addStudentAsync, updateStudentAsync } from "./studentsSlice"

export default function StudentForm() {
  const dispatch  = useDispatch()
  const navigate  = useNavigate()
  const location  = useLocation()
  const editing   = location.state

  const [name,       setName]       = useState(editing?.name       ?? "")
  const [age,        setAge]        = useState(editing?.age        ?? "")
  const [grade,      setGrade]      = useState(editing?.grade      ?? "")
  const [gender,     setGender]     = useState(editing?.gender     ?? "Male")
  const [attendance, setAttendance] = useState(editing?.attendance ?? "")
  const [marks,      setMarks]      = useState(editing?.marks      ?? "")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name,
      age: Number(age),
      grade,
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

  return (
    <div className="container mt-4">
      <h1>{editing ? "Edit Student" : "Add Student"}</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            style={{ maxWidth: 220 }}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            style={{ maxWidth: 220 }}
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            style={{ maxWidth: 220 }}
            placeholder="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <span className="me-2">Gender:</span>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              value="Male"
              checked={gender === "Male"}
              onChange={() => setGender("Male")}
            />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              value="Female"
              checked={gender === "Female"}
              onChange={() => setGender("Female")}
            />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
        </div>

        {editing && (
          <>
            <div className="mb-3">
              <input
                className="form-control"
                style={{ maxWidth: 220 }}
                placeholder="Attendance"
                type="number"
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                style={{ maxWidth: 220 }}
                placeholder="Marks"
                type="number"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className={editing ? "btn btn-primary" : "btn btn-secondary"}
        >
          {editing ? "Update" : "Add"}
        </button>
      </form>
    </div>
  )
}
