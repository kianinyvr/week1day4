var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];



function compareName(a,b) {
  if(a.name < a.name)
    return -1;
  if(a.name > b.name)
    return 1;
  return 0;
}

function compareAge(a,b) {
  if(a.age < b.age)
    return 1;
  if(a.age > b.age)
    return -1;
  return 0;
}

students.sort(compareAge)
        .sort(compareName);

console.log(students);