import "./style.css"
import { setupRedux } from "./script"

document.querySelector("#app").innerHTML = `
  <main>redux app</main>
  <button id="addCookie">add a cookie</button>
  <button id="removeCookie">remove a cookie</button>
  <h2 id="cookieCount"></h2>
`

// Redux setup call karo
setupRedux()