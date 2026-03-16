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

    const total    = students.length
    const sumAtt   = students.reduce((acc, s) => acc + (s.attendance || 0), 0)
    const sumMarks = students.reduce((acc, s) => acc + (s.marks      || 0), 0)
    const top      = [...students].sort((a, b) => (b.marks || 0) - (a.marks || 0))[0]

    dispatch(updateSchoolStats({
      totalStudents:     total,
      averageAttendance: sumAtt   / total,
      averageMarks:      sumMarks / total,
    }))
    dispatch(setTopStudent(top))
  }, [students, dispatch])

  return (
    <div className="container mt-4">
      <h1>School View</h1>

      <p>Total Students: {totalStudents}</p>
      <p>Average Attendance: {averageAttendance.toFixed(2)}</p>
      <p>Average Marks: {averageMarks.toFixed(2)}</p>
      <p>Top Student: {topStudent ? topStudent.name : "-"}</p>
    </div>
  )
}
