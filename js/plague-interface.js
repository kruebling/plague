import { Plague } from './../js/plague.js';
import { Population } from './../js/population.js';


$(document).ready(function() {

  let test = new Population();
  test.setGrowth();
  let game = setInterval(function(){ console.log("Current Population: " + test.population);
    console.log("Currently Infected: " + test.infected);
    console.log("Currently Dead: " + test.dead);
    console.log("Currently Spread: " + test.spread);
    if (test.spread <= 0) {
      alert("You Win");
    }
    $("#population").text(test.population);
    if (test.population <= 0) {
      clearInterval(game);
      alert("Everyone is DEAD!!!");
      return;
    }
  }, 1000);
  $("#decSpread").click(function(){
    test.setSpreadDown();
  });
  $("#incSpread").click(function(){
    test.setSpreadUp();
  });
});
