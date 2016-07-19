function randomColor(){
  return Math.floor(Math.random()*16777215).toString(16);
};

$('.random-button-js').on('click', function() {
  var isWhite = true;
  var color = randomColor();

  while(isWhite) {
    if (color === 'ffffff') { color = randomColor(); }
    if (color !== 'ffffff') { isWhite = false; }
  }

  $('body').css('backgroundColor', "#" + color);
});

$('.reset-button-js').on('click', function() {
  $('body').css('background', '#ffffff');
});
