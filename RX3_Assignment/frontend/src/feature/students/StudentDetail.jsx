import {useParams,Link,useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {deleteStudentAsync} from "./studentsSlice"

export default function StudentDetail(){

const {id} = useParams()
const dispatch = useDispatch()
const navigate = useNavigate()

const student = useSelector(state =>
 state.students.students.find(s=>s._id===id)
)

const handleDelete = ()=>{
 dispatch(deleteStudentAsync(id))
 navigate("/")
}

return(

<div>

<h1>Student Detail</h1>

<p>Name: {student.name}</p>
<p>Age: {student.age}</p>
<p>Grade: {student.grade}</p>
<p>Attendance: {student.attendance}</p>
<p>Marks: {student.marks}</p>

<Link to={`/edit/${id}`} state={student}>
<button>Edit Details</button>
</Link>

<button onClick={handleDelete}>Delete</button>

</div>

)

}