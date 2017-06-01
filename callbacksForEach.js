//callbacksForEach.js

function findWaldo(arr, found) {
  arr.forEach(function(entry){
    if (entry === "Waldo"){
      actionWhenFound();
    }
  }
)}



function actionWhenFound() {
  console.log("Found Waldo at index: ");
}

findWaldo(["Alice", "Bob", "Waldo"], actionWhenFound);