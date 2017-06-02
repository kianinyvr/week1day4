function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var position = 0;

  function rollDie() {
    var roll = list[position++];
    if(position >= list.length)
      position = 0;
    return roll;
  }
  return rollDie;
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6