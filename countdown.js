var countdownGenerator = function (x) {
  count = x;
  return function(){
    if(count > 0){
      return console.log("T-Minus", count--);
    }
    if(count === 0){
      count--;
      return console.log("Blast Off!");
    }
    count --;
    console.log("Rockets already gone, bub!");

  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
