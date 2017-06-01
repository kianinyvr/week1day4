customMap.js

var words = ["ground", "control", "to", "major", "tom"];

function customMap(arr, cb){
  var result = [];
  for(var i = 0; i < arr.length; i++){
    result.push(cb(arr[i]));
  }
  return console.log(result);
}

customMap(words, function (word){
  return word.length;
});