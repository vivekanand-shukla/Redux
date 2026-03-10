import { createStore } from "redux"
import cartReducer from "./Reducer"
import { addToCart, removeFromCart, calculateTotal } from "./action"

export function setupRedux() {

const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 15 }
]

const productList = document.querySelector("#products")
const cartList = document.querySelector("#cart")
const totalPrice = document.querySelector("#total")

const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  updateCart()
})

function renderProducts() {

  productList.innerHTML = products.map((item) => {
    return `
      <li>
        ${item.name} - Rs.${item.price}
        <button onclick="addHandler(${item.id})">Add to Cart</button>
      </li>
    `
  }).join("")
}

window.addHandler = (id) => {
  const product = products.find((p) => p.id === id)
  store.dispatch(addToCart(product))
  store.dispatch(calculateTotal())
}

window.removeHandler = (id) => {
  store.dispatch(removeFromCart(id))
  store.dispatch(calculateTotal())
}

function updateCart() {

  const state = store.getState()

  cartList.innerHTML = state.cartItems.map((item) => {
    return `
      <li>
        ${item.name} - Rs.${item.price} - Quantity: ${item.quantity}
        <button onclick="removeHandler(${item.id})">Remove</button>
      </li>
    `
  }).join("")

  totalPrice.innerText = `Total: Rs.${state.total}`
}

renderProducts()
updateCart()

}