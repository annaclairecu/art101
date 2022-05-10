/**
 * Author:    Shay and Anna
 * Created:   05.02.2022
 *
 * (c) Copyright by Anna and Shay corp.
 **/

//declaring our variables and array
var aNumberArray = [ 1, 2, 3, 4];

//creating a named function with a single parameter
function SquareNumber(x){
    var results = (x**2)
    return results;
}

//Testing our function with numbers
console.log("Square our Number", SquareNumber(2));
console.log("Square our Number", SquareNumber(3));

var aNumberArray = [ 1, 2, 3, 4];
console.log("Our array", aNumberArray);

var results = aNumberArray.map(SquareNumber);
console.log("Numbers in array squared:", results);


//Using an anonymous function as a callback with map
var array = aNumberArray.map(function(x){
      return x/2
})
console.log("Numbers will be divided by half", array);
