import { useState } from 'react'
import Posts from './feaures/Posts/Posts'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <h1>my social media app </h1> 
      <div>
        <Posts/>
        </div> 
    </>
  )
}

export default App
