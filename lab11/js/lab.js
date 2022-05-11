/**
 * Author:    Anna and Shay
 * Created:   5.11.22
 *
 * (c) Copyright by Anna and Shay inc.
 **/
// add button below Challenges div
var butt1 = $("#challenges").append("<button> Press Me! </button>");
//add click and toggle
$("button").click(function(){
  $("#p1").toggleClass("selected");
});
// add a button below the problems div
var butt2 = $("#problems").append("<button> This is a button! </button>");
$("button").click(function(){
  $("#p2").toggleClass("selected2");
});
// add a button below the results div
var butt3 = $("#results").append("<button> Fun with buttons! </button>");
$("button").click(function(){
  $("#p3").toggleClass("selected3");
});
