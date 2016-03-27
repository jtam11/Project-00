var player1 = $('#one');
var player2 = $('#two');
var isKeyOn = true;


$(document).on('ready', function () {

  console.log('JS is loaded!');

  oneRandomChar();
  twoRandomChar();

    /* Moving Player 1 */
  $(document).on('keydown', function (event) {
    if (event.keyCode === 65 && isKeyOn) {
      player1.empty();
      player1.animate({
      left: "+=20px"
      }, 50);
      oneRandomChar();
      oneWon();
    }
  });

  /* Moving Player 2 */
  $(document).on('keydown', function (event) {
    if (event.keyCode === 74 && isKeyOn) {
      player2.empty();
      player2.animate({
      left: "+=20px"
      }, 50);
      twoRandomChar();
      twoWon();
    }
  });
});

/* Reset Button */
$('#reset').on('click', function resetRace() {
  player1.animate({left: '18px'}, 50);
  player1.empty();
  oneRandomChar();
  player2.animate({left: '18px'}, 50);
  player2.empty();
  twoRandomChar();
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

function oneRandomChar() {
  var randomNumber = Math.floor (( Math.random() * 100 ));
  if (randomNumber < 25 ) {
    player1.append('<p>a</p>');
    return 'a';
  } else if (randomNumber > 25 && randomNumber < 50) {
    player1.append('<p>s</p>');
    return 's';
  } else if (randomNumber > 50 && randomNumber < 75) {
    player1.append('<p>d</p>');
    return 'd';
  } else {
    player1.append('<p>f</p>');
    return 'f';
  }
}

function twoRandomChar() {
  var randomNumber = Math.floor (( Math.random() * 100 ));
  if (randomNumber < 25 ) {
    player2.append('<p>j</p>');
    return 'j';
  } else if (randomNumber > 25 && randomNumber < 50) {
    player2.append('<p>k</p>');
    return 'k';
  } else if (randomNumber > 50 && randomNumber < 75) {
    player2.append('<p>l</p>');
    return 'l';
  } else {
    player2.append('<p>;</p>');
    return ';';
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
