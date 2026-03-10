import { ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_TOTAL } from "./action"

const initialState = {
  cartItems: [],
  total: 0
}

const cartReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_TO_CART: {
      const item = state.cartItems.find(
        (p) => p.id === action.payload.id
      )

      if (item) {
        const updatedCart = state.cartItems.map((p) =>
          p.id === action.payload.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )

        return { ...state, cartItems: updatedCart }
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
      }
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        )
      }

    case CALCULATE_TOTAL: {
      const total = state.cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity
      }, 0)

      return { ...state, total }
    }

    default:
      return state
  }
}

export default cartReducer
