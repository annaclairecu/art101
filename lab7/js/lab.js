/**
 * Author:    Anna and Shay
 * Created:   04.27.22
 *
 * (c) Copyright by Anna and Shay inc.
 **/

 //function declaration
 function sortName() {
   var userName = window.prompt("tell us your full name!");
   console.log("userName = ", userName);
   // split string to array
   var nameArray = userName.split('');
   console.log("nameArray = ", nameArray);
   // sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort = ", nameArraySort);
   // join array back to a string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted = ", nameSorted);
   return nameSorted;
 }

 //output
 document.writeln("We made your name better!: ",
  sortName(), "</br>");
