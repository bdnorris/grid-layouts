/* Anything here will be processed by the javascript interpreter when this file finishes loading. */



$(document).ready(function(){
/* Anything here will run when the entire HTML document has been processed by the browser */


});

var GRID = {
  generateGridItem: function([h, v, c, bg]) {
    return `<div class="grid-item h${h} v${v} ${c}" style="background-image:url('img/${bg}')">&nbsp;</div>`
  },

  refresh: function() {
    const refresh = document.getElementById('refresh');
    refresh.addEventListener('click', () => GRID.gridPattern());
  },

  gridPattern: function() {

    // var item = new DocumentFragment()
    const gridContainer = document.getElementById('grid');

    const smallItems = 30,
          randomItems = 60;

    grid = document.getElementById('grid');

    const colors = ['dark', 'orange1', 'yellow', 'orange2', 'brown'];
    const patterns = ['angles.png', 'crosshatch.png', 'dots_lines.png', 'dots_lines1.png', 'floral.png', 'floral4.png', 'geometric2.png', 'lines.png', 'pebbles.png', 'pebbles2.png', 'pebbles3.png', 'squiggle.png', 'triangle.png', 'triangles_dots.png', 'woodland.png'];



    var digits = Array.from({ length: randomItems }, () => [getRandomInt(1, 6), getRandomInt(1, 6), colors[getRandomInt(0, 5)], patterns[getRandomInt(0, patterns.length )]]);

    for (let i = 1 ; i <= smallItems ; i++) {
      digits.push([1, 1, colors[getRandomInt(0, 5)], patterns[getRandomInt(0, patterns.length )]]);
    }

    digits = shuffle(digits);

    console.log(digits);

    const html = digits.map(GRID.generateGridItem).join('');

    gridContainer.innerHTML = html;



  },

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
