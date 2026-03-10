import { setupRedux } from "./script"

document.querySelector('#app').innerHTML = `
<div>
<div>

<h2>Products</h2>
<ul id="products"></ul>

<h2>Cart</h2>
<ul id="cart"></ul>

<p id="total"></p>

</div>

</div>
`;

setupRedux()