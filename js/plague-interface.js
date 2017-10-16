import { Plague } from './../js/plague.js';
import { Population } from './../js/population.js';


$(document).ready(function() {

  let test = new Population();
  test.setGrowth();
  setInterval(function(){ console.log("Current Population: " + test.population);
    console.log("Currently Infected: " + test.infected);
    console.log("Currently Dead: " + test.dead);
    $("#population").text(test.population);
    if (test.population <= 0) {
      alert("Everyone is DEAD!!!");
      return;
    }
  }, 1000);
});
