


import { Add_Book, Remove_Book, Total_Books } from "./acrion";

const initialState = {
  books: [],
  totalBooks :0
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {

    case Add_Book:
      return {
        ...state,
        books: [...state.books, action.payload]
      };

    case Remove_Book:
      return {
        ...state,
        books: state.books.filter(b => b.id !== action.payload)
      };

    case Total_Books:
      return {
        ...state,
        totalBooks: state.books.length
      };

    default:
      return state;
  }
};

export default bookReducer;