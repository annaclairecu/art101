/**
 * Author:    Shay and Anna
 * Created:   05.02.2022
 *
 * (c) Copyright by Anna and Shay corp.
 **/

 function sortingHat(name) {
  var num = name.length;
  var mod = num % 4;

  if (mod == 0) {
  return "Gryffindor."

}
else if (mod == 1 ){
  return "Hufflepuff."

}
else if (mod == 2 ){
 return "Ravenclaw."

}
else if (mod == 3) {
  return "Slytherin."
  }
}

function sortingHatDescription(name) {
 var num = name.length;
 var mod = num % 4;

 if (mod == 0) {
var desc1 = " The legendary Harry Potter, Hermoine Granger, and Ron Weasley were all sorted into Gryffindor. Take great pride in this as Gryffindors are courageous, resourceful, and above all, kind."
 desc1.id = "description1"
 return desc1

}
else if (mod == 1 ){
 return " Hufflepuffs are known to be loyal, selfless, and true friends. Do not let others take your kindness for granted. Hufflepuffs have proven to be quite the hard workers as well."

}
else if (mod == 2 ){
return " Ravenclaw bares the brightest students, who are quick with their wits, but not their studies. One does well in both the classroom and the wizarding world. Your knowledge and wisdom pairs well with your determinism and strength."

}
else if (mod == 3) {
 return "Slytherins are a resourceful and cunning bunch. You are known to hold a strong will and aim to do whatever you must to achieve your goals. With a strong ambition such as yours, do not get lost in conspiracies and schemes."
 }
}
var ourButton = document.getElementById("button");
ourButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var desc = sortingHatDescription(name);
  newText = "<p> The Sorting Hat has sorted you into " + house + desc + "<p>";
  document.getElementById("output").innerHTML = newText;
})
