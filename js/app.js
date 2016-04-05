var player1 = $('#one');
var player2 = $('#two');
var isKeyOn = false;
var oneKey = '';
var twoKey = '';
var $messages = $('.messages');


$(document).on('ready', function () {

  console.log('JS is loaded!');
  $messages.text('Click Start');


  /* TODO: Holy crap.  First of all, this is some great code. This game is frustratingly hard but fun.  Good job.  That being said, the below code can no doubt be refactored to be MUCH smaller.  I can guarantee your code would be much more elegant with an OOP refactor.  This is good work, though. Have no doubt of that :) -jc */
  /* Moving Player 1 */
  $('body').on('keydown', function (event) {
    /* Checks if the randomed letter is an 'a'. */
    if (oneKey === 'a') {
      /* If 'a' is pressed, player moves forwards, another random letter is
      generated, and a function checks to see if player wins with this move. */
      if (event.keyCode === 65 && isKeyOn) {
        player1.empty();
        player1.animate({
        left: "+=50px"
        }, 50);
        oneRandomChar();
        oneWon();
        /* If player hits any of the other keys in their control, player moves
        backwards and another random letter is generated */
      } else if ( (event.keyCode === 83 || event.keyCode === 68 || event.keyCode === 70) && isKeyOn ) {
        player1.empty();
        if ( parseInt( player1.css('left') ) > 18 ) {
          player1.animate({
          left: "-=50px"
          }, 50);
        }
        oneRandomChar();
      }
      /* Checks if the randomed letter is an 's'. */
    } else if (oneKey === 's') {
      /* If 's' is pressed, player moves forwards, another random letter is
      generated, and a function checks to see if player wins with this move. */
      if (event.keyCode === 83 && isKeyOn) {
        player1.empty();
        player1.animate({
        left: "+=50px"
        }, 50);
        oneRandomChar();
        oneWon();
      } else if ( (event.keyCode === 65 || event.keyCode === 68 || event.keyCode === 70) && isKeyOn ) {
        player1.empty();
        if ( parseInt( player1.css('left') ) > 18 ) {
          player1.animate({
          left: "-=50px"
          }, 50);
        }
        oneRandomChar();
      }
      /* Checks if the randomed letter is an 'd'. */
    } else if (oneKey === 'd') {
      /* If 'd' is pressed, player moves forwards, another random letter is
      generated, and a function checks to see if player wins with this move. */
      if (event.keyCode === 68 && isKeyOn) {
        player1.empty();
        player1.animate({
        left: "+=50px"
        }, 50);
        oneRandomChar();
        oneWon();
      } else if ( (event.keyCode === 65 || event.keyCode === 83 || event.keyCode === 70) && isKeyOn ) {
        player1.empty();
        if ( parseInt( player1.css('left') ) > 18 ) {
          player1.animate({
          left: "-=50px"
          }, 50);
        }
        oneRandomChar();
      }
      /* Checks if the randomed letter is an 'f'. */
    } else if (oneKey === 'f') {
      /* If 'f' is pressed, player moves forwards, another random letter is
      generated, and a function checks to see if player wins with this move. */
      if (event.keyCode === 70 && isKeyOn) {
        player1.empty();
        player1.animate({
        left: "+=50px"
        }, 50);
        oneRandomChar();
        oneWon();
      } else if ( (event.keyCode === 65 || event.keyCode === 68 || event.keyCode === 83) && isKeyOn ) {
        player1.empty();
        if ( parseInt( player1.css('left') ) > 18 ) {
          player1.animate({
          left: "-=50px"
          }, 50);
        }
        oneRandomChar();
      }
    }
  });

  /* Moving Player 2 */
  $('body').on('keydown', function (event) {
    /* Checks if the randomed letter is an 'j'. */
    if (twoKey === 'j') {
      /* If 'j' is pressed, player moves forwards, another random letter is
      generated, and a function checks to see if player wins with this move. */
      if (event.keyCode === 74 && isKeyOn) {
        player2.empty();
        player2.animate({
        left: "+=50px"
        }, 50);
        twoRandomChar();
        twoWon();
      } else if ( (event.keyCode === 75 || event.keyCode === 76 || event.keyCode === 186) && isKeyOn ) {
        player2.empty();
        if ( parseInt( player2.css('left') ) > 18 ) {
          player2.animate({
          left: "-=50px"
          }, 50);
        }
        twoRandomChar();
      }
      /* Checks if the randomed letter is an 'k'. */
    } else if (twoKey === 'k') {
      /* If 'k' is pressed, player moves forwards, another random letter is
      generated, and a function checks to see if player wins with this move. */
      if (event.keyCode === 75 && isKeyOn) {
        player2.empty();
        player2.animate({
        left: "+=50px"
        }, 50);
        twoRandomChar();
        twoWon();
      } else if ( (event.keyCode === 74 || event.keyCode === 76 || event.keyCode === 186) && isKeyOn ) {
        player2.empty();
        if ( parseInt( player2.css('left') ) > 18 ) {
          player2.animate({
          left: "-=50px"
          }, 50);
        }
        twoRandomChar();
      }
      /* Checks if the randomed letter is an 'l'. */
    } else if (twoKey === 'l') {
      /* If 'l' is pressed, player moves forwards, another random letter is
      generated, and a function checks to see if player wins with this move. */
      if (event.keyCode === 76 && isKeyOn) {
        player2.empty();
        player2.animate({
        left: "+=50px"
        }, 50);
        twoRandomChar();
        twoWon();
      } else if ( (event.keyCode === 74 || event.keyCode === 75 || event.keyCode === 186) && isKeyOn ) {
        player2.empty();
        if ( parseInt( player2.css('left') ) > 18 ) {
          player2.animate({
          left: "-=50px"
          }, 50);
        }
        twoRandomChar();
      }
      /* Checks if the randomed letter is an ';'. */
    } else if (twoKey === ';') {
      /* If ';' is pressed, player moves forwards, another random letter is
      generated, and a function checks to see if player wins with this move. */
      if (event.keyCode === 186 && isKeyOn) {
        player2.empty();
        player2.animate({
        left: "+=50px"
        }, 50);
        twoRandomChar();
        twoWon();
      } else if ( (event.keyCode === 74 || event.keyCode === 75 || event.keyCode === 76) && isKeyOn ) {
        player2.empty();
        if ( parseInt( player2.css('left') ) > 18 ) {
          player2.animate({
          left: "-=50px"
          }, 50);
        }
        twoRandomChar();
      }
    }
  });
});

/* Start Button */
$('#start').on('click', function startRace() {
  this.disabled = true;
  oneRandomChar();
  twoRandomChar();
  isKeyOn = true;
  $messages.text('GO!');
});

/* Reset Button */
$('#reset').on('click', function resetRace() {
  player1.animate({left: '18px'}, 50);
  player1.empty();
  player2.animate({left: '18px'}, 50);
  player2.empty();
  isKeyOn = false;
  $('#start').attr('disabled', false);
  $messages.text('Click Start');
  $('#oneWinner').css('border', '3px solid black');
  $('#twoWinner').css('border', '3px solid black');
});

/* TODO: oneWon and twoWon can be refactored to be one function that takes the word 'one' or 'two' as an argument. -jc */
/* Player 1 Win Verifier */
function oneWon() {
  if( parseInt( player1.css('left') ) >= 850 ) {
    isKeyOn = false;
    $('#oneWinner').css('border', '8px solid #1AF906');
    $messages.text('Player 1 Wins! Reset to play again!');
  }
}

/* Player 2 Win Verifier */
function twoWon() {
  if( parseInt( player2.css('left') ) >= 850 ) {
    isKeyOn = false;
    $('#twoWinner').css('border', '8px solid #1AF906');
    $messages.text('Player 2 Wins! Reset to play again!');
  }
}

/* TODO: oneRandomChar and twoRandomChar can be refactored to be one function that takes the number '1' or '2' as an argument. -jc */
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

/* TODO: Remove unused or commented-out code from production code -jc
*/
/* Randomizer Constructor */
// function Randomizer (player /*selector*/, firstkey/**/, secondkey, thirdkey, fourthkey, varname) {
//   var randomNumber = Math.floor (( Math.random() * 100 ));
//   if (randomNumber < 25 ) {
//     player.append('<p>' + firstkey + '</p>');
//     varname = 'firstkey';
//   } else if (randomNumber >= 25 && randomNumber < 50) {
//     player.append('<p>' + secondkey + '</p>');
//     varname = 'secondkey';
//   } else if (randomNumber >= 50 && randomNumber < 75) {
//     player.append('<p>' + thirdkey + '</p>');
//     varname = 'thirdkey';
//   } else {
//     player.append('<p>' + fourthkey + '</p>');
//     varname = 'fourthkey';
//   }
// }
//
// var p1RandomChar = Randomizer( $('#one'), 'a', 's', 'd', 'f', 'oneKey');
// console.log(p1RandomChar);
// var p2RandomChar = Randomizer( $('#two'),'j', 'k', 'l', ';', 'twoKey' );
// console.log(p2RandomChar);
