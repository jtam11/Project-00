

$(document).on('ready', function () {

  var player1 = $('#one');
  var player2 = $('#two');

  console.log('JS is loaded!');

  /* Moving Player 1 */
  $(document).on('keydown', function (event) {
   if (event.keyCode === 65) {
     player1.animate({
     left: "+=20px"
   }, 50);
   }
  });

  /* Moving Player 2 */
  $(document).on('keydown', function (event) {
   if (event.keyCode === 74) {
     player2.animate({
     left: "+=20px"
   }, 50);
   }
  });

  /* Reset Button */
  $('#reset').on('click', function resetRace() {
    player1.animate({left: '18px'}, 50);
    player2.animate({left: '18px'}, 50);
  });
});


// function Sprite(name, color) {
//
//   this.name = name;
//   this.color = color;
//   this.move = function () {
//
//   };
// }
