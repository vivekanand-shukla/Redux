import {useState} from "react"
import {useDispatch} from "react-redux"
import {useNavigate,useLocation} from "react-router-dom"
import {addStudentAsync,updateStudentAsync} from "./studentsSlice"

export default function StudentForm(){

const dispatch = useDispatch()
const navigate = useNavigate()
const location = useLocation()

const editingStudent = location.state

const [name,setName] = useState(editingStudent?.name || "")
const [age,setAge] = useState(editingStudent?.age || "")
const [grade,setGrade] = useState(editingStudent?.grade || "")
const [gender,setGender] = useState(editingStudent?.gender || "Male")
const [attendance,setAttendance] = useState(editingStudent?.attendance || "")
const [marks,setMarks] = useState(editingStudent?.marks || "")

const handleSubmit=(e)=>{

e.preventDefault()

const studentData={
 name,
 age:Number(age),
 grade,
 gender,
 attendance:Number(attendance),
 marks:Number(marks)
}

if(editingStudent){

dispatch(updateStudentAsync({
id:editingStudent._id,
updatedStudent:studentData
}))

}else{

dispatch(addStudentAsync(studentData))

}

navigate("/")

}

return(

<div>

<h1>{editingStudent ? "Edit Student" : "Add Student"}</h1>

<form onSubmit={handleSubmit}>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Age"
value={age}
onChange={(e)=>setAge(e.target.value)}
/>

<br/><br/>

<input
placeholder="Grade"
value={grade}
onChange={(e)=>setGrade(e.target.value)}
/>

<br/><br/>

<label>
<input
type="radio"
value="Male"
checked={gender==="Male"}
onChange={(e)=>setGender(e.target.value)}
/>
Male
</label>

<label>
<input
type="radio"
value="Female"
checked={gender==="Female"}
onChange={(e)=>setGender(e.target.value)}
/>
Female
</label>

<br/><br/>

<input
placeholder="Attendance"
value={attendance}
onChange={(e)=>setAttendance(e.target.value)}
/>

<br/><br/>

<input
placeholder="Marks"
value={marks}
onChange={(e)=>setMarks(e.target.value)}
/>

<br/><br/>

<button type="submit">
{editingStudent ? "Update" : "Add"}
</button>

</form>

</div>

)

}