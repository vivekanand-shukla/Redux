import {createStore } from "redux"
import createReducer from "./reducer"
import { calculateAverageAge , removeProfile , addProfile } from "./action"



export function setupRedux() { 

// Add Profile inputs
const idInput = document.querySelector("#ID")
const nameInput = document.querySelector("#Name")
const ageInput = document.querySelector("#Age")
const addBtn = document.querySelector("#addpro")

// Remove Profile inputs
const removeIdInput = document.querySelector("#ID1")
const removeBtn = document.querySelector("#remove")

// List and Average
const profileList = document.querySelector("#ul")
const averageText = document.querySelector("#pp")


const store = createStore(createReducer , window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())

 store.subscribe(() => {
  updateProfile()
})


const addHandler=(id ,name ,age)=>{
    const profile = {id   ,name , age}
    store.dispatch(addProfile(profile))

}

const removeProfileFunc=(profileId)=>{
    store.dispatch(removeProfile(profileId))
    
}


const calculateAverageAgeFunc=()=>{
    store.dispatch(calculateAverageAge())
    
}

function updateProfile(){
    const state = store.getState()

    profileList.innerHTML = state.profile.map((item) => {
    return `<li>${item.id}. ${item.name} (${item.age} years old)</li> `
  }).join("")

    averageText.innerText = `Average Age:${state.average.toFixed(2)}`
}

calculateAverageAgeFunc()

addBtn.addEventListener("click", () => {
  addHandler(Number(idInput.value), nameInput.value, Number(ageInput.value))
  calculateAverageAgeFunc()
})




removeBtn.addEventListener("click", () => {
  removeProfileFunc(Number(removeIdInput.value))
  calculateAverageAgeFunc()
})

updateProfile()
}


