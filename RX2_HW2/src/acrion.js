export const Add_Book = "books/add"
export const Remove_Book = "books/remove"
export const Total_Books = "books/total"
export const addBook=(book)=>{
    return {
        type: Add_Book,
        payload : book
    }

}
export const removeBook=(bookId)=>{
    return {
        type: Remove_Book,
        payload : bookId
    }

}
export const totalbooks=()=>{
    return {
        type: Total_Books,
      
    }

}