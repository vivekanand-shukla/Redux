import { configureStore } from "@reduxjs/toolkit"
import studentsReducer from "../feature/students/studentsSlice"
// import schoolReducer from "../feature/school/schoolSlice"

export default configureStore({
  reducer:{
    students: studentsReducer,
    // school: schoolReducer
  }
})