import React  , {useState}from "react";
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import {removeBook ,addBook ,totalbooks} from "./acrion"
export default function App() {


  
const books = useSelector( (state)=> state.books)
const totalBooks = useSelector((state)=> state.totalBooks)
const dispatch = useDispatch()
const [title,setTilte] = useState("")
const [Author,setAuthor] = useState("")
const [ISBN,setISBN] = useState()
function AddBookHandler(){
  const obj ={
   id : Number(books.length+1) ,
    title ,Author ,ISBN: Number(ISBN)
  }
   dispatch(addBook(obj))
   dispatch(totalbooks())


}
function removeHandler(id){
   dispatch(removeBook(id))
   dispatch(totalbooks())
}

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      <h1>Library Management</h1>

      {/* Add Book Section */}
      <div>
        <input value={title} onChange={(e)=>{setTilte(e.target.value)}} type="text" placeholder="Title" />
        <input value={Author}  onChange={(e)=>{setAuthor(e.target.value)}}   type="text" placeholder="Author" />
        <input value={ISBN}  onChange={(e)=>{setISBN(e.target.value)}}  type="number" placeholder="ISBN" />
        <button onClick={AddBookHandler}>Add Book</button>
      </div>

      {/* Summary */}
      <h2 style={{ marginTop: "30px" }}>Library Summary</h2>

      <p>Total Books: {totalBooks}</p>

      {/* Book List */}
      <ul>
        {/* <li>
          1984 by George Orwell (ISBN: 3877887788)
          <button style={{ marginLeft: "10px" }}>Remove</button>
        </li> */}
       { books.map(b => <li>
           {b.title} by {b.Author}  (ISBN: {b.ISBN})
            <button onClick={()=>{removeHandler(b.id)}}
             style={{ marginLeft: "10px" }}>Remove</button>

       </li>)}
      </ul>

    </div>
  );
}