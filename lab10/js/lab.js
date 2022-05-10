/**
 * Author:    Shay and Anna
 * Created:   05.02.2022
 *
 * (c) Copyright by Anna and Shay corp.
 **/

 var outputEl = document.getElementById("output");

 var userName = document.getElementById("user-name");

  var buttonEl = document.getElementById('my-button');
 console.log("Button:", buttonEl);

function sortName(word) {

  var nameArray = word.split('');

  var nameArraySort = nameArray.sort();

  var nameSorted = nameArraySort.join('');

  return nameSorted;
}

buttonEl.addEventListener("click", function(){
  var inputValue = userName.value;
  var result = sortName(inputValue);
  outputEl.innerHTML = "<p>" + "Hello, " + result + "</p>";

});
