import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateSchoolStats, setTopStudent } from "./schoolSlice"

export default function SchoolView() {
  const dispatch = useDispatch()
  const students = useSelector((s) => s.students.students)
  const { totalStudents, averageAttendance, averageMarks, topStudent } =
    useSelector((s) => s.school)

  useEffect(() => {
    if (students.length === 0) {
      dispatch(updateSchoolStats({ totalStudents: 0, averageAttendance: 0, averageMarks: 0 }))
      dispatch(setTopStudent(null))
      return
    }

    const total         = students.length
    const sumAttendance = students.reduce((acc, s) => acc + (s.attendance || 0), 0)
    const sumMarks      = students.reduce((acc, s) => acc + (s.marks      || 0), 0)
    const top           = [...students].sort((a, b) => (b.marks || 0) - (a.marks || 0))[0]

    dispatch(updateSchoolStats({
      totalStudents:     total,
      averageAttendance: sumAttendance / total,
      averageMarks:      sumMarks      / total,
    }))
    dispatch(setTopStudent(top))
  }, [students, dispatch])

  const stats = [
    { icon: "🎓", val: totalStudents,              key: "Total Students" },
    { icon: "📅", val: averageAttendance.toFixed(2), key: "Avg Attendance" },
    { icon: "📝", val: averageMarks.toFixed(2),      key: "Avg Marks" },
  ]

  return (
    <div className="page-wrap">
      <div className="page-head">
        <div>
          <h1 className="page-title">School View</h1>
          <p className="page-sub">School-wide statistics at a glance</p>
        </div>
      </div>

      <div className="stat-grid">
        {stats.map((s) => (
          <div key={s.key} className="stat-card">
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-val">{s.val}</div>
            <div className="stat-key">{s.key}</div>
          </div>
        ))}
      </div>

      <div className="top-banner">
        <div className="top-banner-label">Top Performing Student</div>
        <div className="top-banner-name">
          {topStudent ? topStudent.name : "—"}
        </div>
        {topStudent && (
          <div className="top-banner-meta">
            Marks: {topStudent.marks ?? "—"} &nbsp;·&nbsp; Attendance: {topStudent.attendance ?? "—"}
          </div>
        )}
      </div>
    </div>
  )
}
