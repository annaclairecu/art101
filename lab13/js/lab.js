/**
 * Author:    Anna and Shay
 * Created:   5.18.22
 *
 * (c) Copyright by Anna and Shay inc.
 **/

 //print numbers from 1 to 100
function fizz (){
for (var hundreds=1; hundreds<200; hundreds++) {
//name num equal to our 1-100 printed numbers
  var num = hundreds;
  //if the number is divisible by 5 AND 3, it will print FizzBuzz
  if (num%5 === 0 && num%3 === 0 && num%7 ===0) {
    $("#output").append("<p>" + "FizzBuzzBoom" + "</p>");

  // if the number is divisible by 3, it will print Fizz
  }  else if (num%5 === 0 && num%3 === 0) {
    $("#output").append("<p>" + "FizzBuzz" + "</p>");

  // if a number is divisble by 5 and 7
  }  else if (num%5 === 0 && num%7 === 0) {
    $("#output").append("<p>" + "BuzzBoom" + "</p>");

  // if a number is divisible by 7 and 3
  }  else if (num%7 === 0 && num%3 === 0) {
    $("#output").append("<p>" + "FizzBoom" + "</p>");
  // if it is a multiple of 7

  }  else if (num%7 === 0) {
    $("#output").append("<p>" + "Boom" + "</p>");

  // if a number is divisble by 5
  } else if (num%3 === 0) {
    $("#output").append("<p>" + "Fizz" + "</p>");

  // if the number is divisble by 5, it will print Buzz
  } else if (num%5 === 0) {
    $("#output").append("<p>" + "Buzz" + "</p>");
  // if the number is not divisible by 3 or 5, it will just print our number
  } else {
   $("#output").append("<p>" + hundreds + "</p>");
  }
}
}
var ourButton = document.getElementById("ourButton");
ourButton.addEventListener("click", function(){
  fizz()
});
