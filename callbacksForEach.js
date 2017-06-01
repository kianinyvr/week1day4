//callbacksForEach.js

function findWaldo(arr, found) {
  arr.forEach(function(entry){
    if (entry === "Waldo"){
      actionWhenFound();
    }
  }
)}


function actionWhenFound(index) {
  console.log("Found Him");
}

findWaldo(["Alice", "Bob", "Waldo"], actionWhenFound);