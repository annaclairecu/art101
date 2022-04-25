/**
 * Author:    Anna and Shay
 * Created:   04.24.2022
 *
 * (c) Copyright by Anna and Shay inc.
 **/

 // Define Variables
 myTransport = ["car", "bus", "feet", "skateboard"];

 myMainRide = {
   make: "Dodge",
   model: "Ram",
   color: "Silver",
   year: 2007,
   age: function() {
      return 2022 - age;
   }
 }

 // Output
 document.writeln("Getting around: ", myTransport, "<br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "<pre>");
