$(document).ready(function() {

  var score = 0 ;
  var wins = 0 ;
  var lose = 0;
  var gm1 = getRandom();
  var gm2 = getRandom();
  var gm3 = getRandom();
  var gm4 = getRandom();
  var numToMatch = getRandom();
  var runTotal = 0
  var pointTotal = 0

  function getRandom() {
    return Math.random();
    console.log("hello");

  }
  $("header").click(function(){
    alert("Game Starting");
    getRandom();

  });
});

// $(function() {
//     console.log( "ready!" );
// });

//
//   //maybe on start make zeros appear
//
//
//   if (runTotal === pointTotal){
//     alert("you win")
//     wins++;
//     console.log("winsplus");
//   }
//   if (runTotal > numToMatch){
//     alert("you Lose")
//     lose++;
//   }
//
//   // $("#red").on("click", function(
//   //   runTotal += gm1
//   //   $("#red").html(runTotal)
//   // ))


//if the red gem is clicked then
//1. make score ++
//2. show value of current red gem in value box
//3. check if total score is won or lost
//   $("#red").click(function(){
//     // action goes here!!
//   score += gm1;
//   $('scoreis').html(runTotal);
//   });
//


// $("#yellow").click(function(){
//     // action goes here!!
//     $('scoreis').html(runTotal);
//     });
//   score += gm2;
//
//   $("#blue").click(function(){
//     // action goes here!!
//   score += gm3;
//   });
//   $("#green").click(function(){
//     // action goes here!!
//   score += gm4;
