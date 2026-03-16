import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const API = "https://redux-learning-7xaq.vercel.app"

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(`${API}/students`)
    return response.data
  }
)

export const addStudentAsync = createAsyncThunk(
  "students/addStudent",
  async (newStudent) => {
    // Hosted backend POST only saves name/age/grade (bug in their code)
    // So: POST to create → immediately PUT to save gender/marks/attendance
    const { name, age, grade, ...rest } = newStudent
    const postRes = await axios.post(`${API}/students`, { name, age, grade })
    const created = postRes.data

    if (Object.keys(rest).length > 0) {
      const putRes = await axios.put(`${API}/students/${created._id}`, rest)
      return putRes.data
    }

    return created
  }
)

export const updateStudentAsync = createAsyncThunk(
  "students/updateStudent",
  async ({ id, updatedStudent }) => {
    const response = await axios.put(`${API}/students/${id}`, updatedStudent)
    return response.data
  }
)

export const deleteStudentAsync = createAsyncThunk(
  "students/deleteStudent",
  async (id) => {
    await axios.delete(`${API}/students/${id}`)
    return id
  }
)

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    status: "idle",
    error: null,
    filter: "All",
    sortBy: "name"
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "success"
        state.students = action.payload
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "error"
        state.error = action.error.message
      })
      .addCase(addStudentAsync.fulfilled, (state, action) => {
        state.students.push(action.payload)
      })
      .addCase(addStudentAsync.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(updateStudentAsync.fulfilled, (state, action) => {
        const index = state.students.findIndex(s => s._id === action.payload._id)
        if (index !== -1) state.students[index] = action.payload
      })
      .addCase(deleteStudentAsync.fulfilled, (state, action) => {
        state.students = state.students.filter(s => s._id !== action.payload)
      })
  }
})

export const { setFilter, setSortBy } = studentsSlice.actions
export default studentsSlice.reducer
