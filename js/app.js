$(document).on('ready',function() {

  console.log('JS is loaded!');



});

// function Sprite(name, color) {
//
//   this.name = name;
//   this.color = color;
//   this.move = function () {
//
//   };
// }
$("#one").on('click', function move() {
  $(this).animate({ "left": "+=50px" });
});
