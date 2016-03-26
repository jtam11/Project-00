var player1 = $('#one');
var player2 = $('#two');
var isKeyOn = true;

$(document).on('ready', function () {

  console.log('JS is loaded!');

  /* Moving Player 1 */
  $(document).on('keydown', function (event) {
    if (event.keyCode === 65 && isKeyOn) {
      player1.animate({
      left: "+=20px"
      }, 50);
      oneWon();
    }
  });

  /* Moving Player 2 */
  $(document).on('keydown', function (event) {
    if (event.keyCode === 74 && isKeyOn) {
      player2.animate({
      left: "+=20px"
      }, 50);
      twoWon();
    }
  });
});

/* Reset Button */
$('#reset').on('click', function resetRace() {
  player1.animate({left: '18px'}, 50);
  player2.animate({left: '18px'}, 50);
  isKeyOn = true;
});

/* Player 1 Win Verifier */
function oneWon() {
  if( parseInt( $('#one').css('left') ) >= 860 ) {
    alert('Player One Wins!');
    isKeyOn = false;
  }
}

/* Player 2 Win Verifier */
function twoWon() {
  if( parseInt( $('#two').css('left') ) >= 860 ) {
    alert('Player Two Wins!');
    isKeyOn = false;
  }
}


// function Sprite(name, color) {
//
//   this.name = name;
//   this.color = color;
//   this.move = function () {
//
//   };
// }
