import { setupRedux } from "./script";
document.querySelector('#app').innerHTML = `
  <div>
    <h2>Add Profile</h2>

<input id="ID" type="number" placeholder="ID">
<input id="Name" type="text" placeholder="Name">
<input id="Age" type="number" placeholder="Age">
<button id="addpro">Add Profile</button>

<h2>Remove Profile</h2>

<input id="ID1" type="number" placeholder="ID1">
<button id="remove">Remove Profile</button>

<ul id="ul">
  
</ul>

<p id="pp"></p>

  </div>
`



setupRedux()