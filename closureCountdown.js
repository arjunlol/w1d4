var countdownGenerator = function (x) {
  /* your code here */
  var timesRun = 0;
  return function (){
    if (timesRun < 3){
      console.log("T-minus ", (3-timesRun), "...");
      timesRun++;
    } else if (timesRun == 3) {
      console.log("Blast Off!");
      timesRun++;
    } else {
      console.log("Rockets already gone, bub!");
   }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
