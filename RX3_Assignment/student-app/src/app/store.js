import { configureStore } from "@reduxjs/toolkit"
import studentsReducer from "../features/students/studentsSlice"
import schoolReducer from "../features/school/schoolSlice"

const store = configureStore({
  reducer: {
    students: studentsReducer,
    school: schoolReducer
  }
})

export default store
