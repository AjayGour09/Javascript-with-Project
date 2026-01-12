const Arr = [1,2,3,4,3,1,39,44]

// let duplicatearr = [...new Set(Arr)]
// console.log(duplicatearr);
// const arrays = Arr.map((item, index) => Arr.indexOf(item) !== index);       //Filter..
// console.log(arrays);
  

// const fruits = ['apple', 'banana', 'cherry', 'date'];  ///Question Two
// fruits.splice(1, 2, 'grape', 'kiwi');
// console.log(fruits);
// let copy = Arr.slice(0,5);
// console.log(copy);

// Write a function that takes an array of numbers and returns only even numbers, using the filter() method.

const NaturalArr = [1,4,3,5,6,3,4,12,4]
// function name(arr) {     .............UseFilter.
//   return arr.filter((item)=>item % 2 === 0)
// }
// console.log(name(NaturalArr));
 

// function evenNum(arr){ ....for Loop.
//   let evens = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0) {
//       evens.push(arr[i]);
//     }
//   }
//   return evens;
// }
// console.log(evenNum(Arr));


// const original = { a: 1, b: { c: 2 } };
// const dup = JSON.stringify(original)
// const newa = JSON.parse(dup)
// console.log(dup);
// console.log(newa);


// Write a function that takes an array of objects (users) and returns a new array sorted by a property, say "age".
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 30 }
// ]; 
// function Sorted(arrr){
//     return arrr.slice().sort((a,b)=>a.age - b.age)
// }
// console.log(Sorted(users));



// const date = [12,3,12,45,45,5,89,100,2,0]
// console.log(date.sort((a,b)=>a-b));





// Build a JavaScript function (or a small module) that processes an array of student objects, each having the following structure
// [
//   { name: 'Amit', age: 22, marks: [75, 68, 81], gender: 'male' },
//   { name: 'Priya', age: 21, marks: [88, 92, 77], gender: 'female' },
  // ... or student ho skte hai
// ]
// Tasks
// 1 Average Calculation: Add an average field to each student object, representing the average of their marks array.

// 2 Top Scorer Extraction: Write a function to extract the names of the top 3 scoring students (based on average marks), returned as an array of names, sorted by average descending.

// 3 Group by Gender: Create an object that groups student names by gender. Example output:

// {
//   male: ['Amit', 'Raj'],
//   female: ['Priya', 'Simran']
// }
// Age Filtering: Implement an array method to filter and return all students older than 21.


