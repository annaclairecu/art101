/**
 * Author:    Shay and Anna
 * Created:   05.02.2022
 *
 * (c) Copyright by Anna and Shay corp.
 **/

 var outputEl = document.getElementById("content");

 var new1El = document.createElement("p");

 new1El.innerHTML = "Our new paragraph";

 var new2El = document.createElement("p");

 new2El.innerHTML = "Our other paragraph";

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

new1El.style.fontSize = "1cm";

new2El.style.fontSize = "1cm";

new1El.style.color = "orange";

new2El.style.color = "orange";

var new3El = document.createElement("p");

new3El.innerHTML = "prepend test";

outputEl.prepend(new3El);
