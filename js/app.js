var player1 = $('#one');
var player2 = $('#two');
var isKeyOn = true;
var oneKey = '';
var twoKey = '';


$(document).on('ready', function () {

  console.log('JS is loaded!');
  oneRandomChar();
  twoRandomChar();


    /* Moving Player 1 */
  $(document).on('keydown', function (event) {
    if (oneKey === 'a') {
      if (event.keyCode === 65 && isKeyOn) {
        player1.empty();
        player1.animate({
        left: "+=20px"
        }, 50);
        oneRandomChar();
        oneWon();
      } else if (event.keyCode === 83 || event.keyCode === 68 || event.keyCode === 70) {
        player1.empty();
        player1.animate({
        left: "-=20px"
        }, 50);
        oneRandomChar();
      }
    } else if (oneKey === 's') {
      if (event.keyCode === 83 && isKeyOn) {
        player1.empty();
        player1.animate({
        left: "+=20px"
        }, 50);
        oneRandomChar();
        oneWon();
      } else if (event.keyCode === 65 || event.keyCode === 68 || event.keyCode === 70) {
        player1.empty();
        player1.animate({
        left: "-=20px"
        }, 50);
        oneRandomChar();
      }
    } else if (oneKey === 'd') {
      if (event.keyCode === 68 && isKeyOn) {
        player1.empty();
        player1.animate({
        left: "+=20px"
        }, 50);
        oneRandomChar();
        oneWon();
      } else if (event.keyCode === 65 || event.keyCode === 83 || event.keyCode === 70) {
        player1.empty();
        player1.animate({
        left: "-=20px"
        }, 50);
        oneRandomChar();
      }
    } else if (oneKey === 'f') {
      if (event.keyCode === 70 && isKeyOn) {
        player1.empty();
        player1.animate({
        left: "+=20px"
        }, 50);
        oneRandomChar();
        oneWon();
      } else if (event.keyCode === 65 || event.keyCode === 68 || event.keyCode === 83) {
        player1.empty();
        player1.animate({
        left: "-=20px"
        }, 50);
        oneRandomChar();
      }
    }
  });

  /* Moving Player 2 */
  $(document).on('keydown', function (event) {
    if (twoKey === 'j') {
      if (event.keyCode === 74 && isKeyOn) {
        player2.empty();
        player2.animate({
        left: "+=20px"
        }, 50);
        twoRandomChar();
        twoWon();
      } else if (event.keyCode === 75 || event.keyCode === 76 || event.keyCode === 186) {
        player2.empty();
        player2.animate({
        left: "-=20px"
        }, 50);
        twoRandomChar();
      }
    } else if (twoKey === 'k') {
      if (event.keyCode === 75 && isKeyOn) {
        player2.empty();
        player2.animate({
        left: "+=20px"
        }, 50);
        twoRandomChar();
        twoWon();
      } else if (event.keyCode === 74 || event.keyCode === 76 || event.keyCode === 186) {
        player2.empty();
        player2.animate({
        left: "-=20px"
        }, 50);
        twoRandomChar();
      }
    } else if (twoKey === 'l') {
      if (event.keyCode === 76 && isKeyOn) {
        player2.empty();
        player2.animate({
        left: "+=20px"
        }, 50);
        twoRandomChar();
        twoWon();
      } else if (event.keyCode === 74 || event.keyCode === 75 || event.keyCode === 186) {
        player2.empty();
        player2.animate({
        left: "-=20px"
        }, 50);
        twoRandomChar();
      }
    } else if (twoKey === ';') {
      if (event.keyCode === 186 && isKeyOn) {
        player2.empty();
        player2.animate({
        left: "+=20px"
        }, 50);
        twoRandomChar();
        twoWon();
      } else if (event.keyCode === 74 || event.keyCode === 75 || event.keyCode === 76) {
        player2.empty();
        player2.animate({
        left: "-=20px"
        }, 50);
        twoRandomChar();
      }
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
  if( parseInt( $('#one').css('left') ) >= 850 ) {
    alert('Player One Wins!');
    isKeyOn = false;
  }
}

/* Player 2 Win Verifier */
function twoWon() {
  if( parseInt( $('#two').css('left') ) >= 850 ) {
    alert('Player Two Wins!');
    isKeyOn = false;
  }
}

/* Appends Random Letters for Player 1 */
function oneRandomChar() {
  var randomNumber = Math.floor (( Math.random() * 100 ));
  if (randomNumber < 25 ) {
    player1.append('<p>a</p>');
    oneKey = 'a';
  } else if (randomNumber >= 25 && randomNumber < 50) {
    player1.append('<p>s</p>');
    oneKey = 's';
  } else if (randomNumber >= 50 && randomNumber < 75) {
    player1.append('<p>d</p>');
    oneKey = 'd';
  } else {
    player1.append('<p>f</p>');
    oneKey = 'f';
  }
}

/* Appends Random Letters for Player 2 */
function twoRandomChar() {
  var randomNumber = Math.floor (( Math.random() * 100 ));
  if (randomNumber < 25 ) {
    player2.append('<p>j</p>');
    twoKey = 'j';
  } else if (randomNumber >= 25 && randomNumber < 50) {
    player2.append('<p>k</p>');
    twoKey = 'k';
  } else if (randomNumber >= 50 && randomNumber < 75) {
    player2.append('<p>l</p>');
    twoKey = 'l';
  } else {
    player2.append('<p>;</p>');
    twoKey = ';';
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
