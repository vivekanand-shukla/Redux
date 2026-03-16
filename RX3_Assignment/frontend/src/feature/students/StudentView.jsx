import {useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {fetchStudents} from "./studentsSlice"
import StudentList from "./StudentList"

export default function StudentView(){

const dispatch = useDispatch()

const {students,status,error} = useSelector(state=>state.students)

useEffect(()=>{
 dispatch(fetchStudents())
},[])

return(

<div>

<h1>Student View</h1>

{status==="loading" && <p>Loading...</p>}
{error && <p>Error: {error}</p>}

<StudentList students={students}/>

</div>

)

}