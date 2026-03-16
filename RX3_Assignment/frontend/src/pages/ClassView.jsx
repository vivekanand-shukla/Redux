import {useSelector,useDispatch} from "react-redux"
import {setFilter,setSortBy} from "../feature/students/studentsSlice"

export default function ClassView(){

const dispatch = useDispatch()

const {students,filter,sortBy} = useSelector(state=>state.students)

const filteredStudents = students.filter(student=>{
 if(filter==="Boys") return student.gender==="Male"
 if(filter==="Girls") return student.gender==="Female"
 return true
})

const sortedStudents = [...filteredStudents].sort((a,b)=>{

 if(sortBy==="name") return a.name.localeCompare(b.name)

 if(sortBy==="marks") return (b.marks||0) - (a.marks||0)

 if(sortBy==="attendance") return (b.attendance||0) - (a.attendance||0)

})

return(

<div>

<h1>Class View</h1>

<select onChange={(e)=>dispatch(setFilter(e.target.value))}>
<option>All</option>
<option>Boys</option>
<option>Girls</option>
</select>

<select onChange={(e)=>dispatch(setSortBy(e.target.value))}>
<option value="name">Name</option>
<option value="marks">Marks</option>
<option value="attendance">Attendance</option>
</select>

<ul>

{sortedStudents.map(student=>(
<li key={student._id}>
{student.name} - {student.gender} - Marks: {student.marks} - Attendance: {student.attendance}
</li>
))}

</ul>

</div>

)

}