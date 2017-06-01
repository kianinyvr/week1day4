//MappingPythagorean.js

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(entry){
  return Math.sqrt((entry.x * entry.x) + (entry.y * entry.y));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);