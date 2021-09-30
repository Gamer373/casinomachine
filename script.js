/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

var slots = [];
var x = [50, 490, 930];
var getallen = [];

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  for (var i = 0; i < x.length; i++) {
    var getal = (round(random(0,9)));

    getallen.push(getal);

  }

  for (var i = 0; i < x.length; i++) {
    var slot = new Slot(x[i], getallen[i]);

    slots.push(slot);

  }

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  background('blue');

  for(var i = 0; i < slots.length; i++) {
    slots[i].show();
  }

}