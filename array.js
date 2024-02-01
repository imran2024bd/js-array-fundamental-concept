const numbers = [2, 4, 6 , 7, 9];

// console.log(numbers);

// console.log(numbers[2]);
// console.log(numbers.length);

// const cars = ["Saab", "Volvo", "BMW"];

//****************************************  creates an Array, and assigns values to it: ***********
// const cars = new Array("Saab", "Volvo", "BMW");
// console.log(cars);


// *****************************access an array element by referring to the index number:
// Note: Array indexes start with 0.  [0] is the first element. [1] is the second element.
// const cars = ["Saab", "Volvo", "BMW"];
// let car = cars[0];
// console.log(car , cars.length);

// **************************************Changing an Array Element********************
// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = 'Opel';
// cars[2] = 'Mercedez';
// console.log(cars);

// *********************************** Converting an Array to a String _Returns a string representation of an array. *****************
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.toString();
// console.log(fruits.toString());
// console.log(fruits);
// console.log(typeof(fruits));

// *****************************The length property of an array returns the length of an array (the number of array elements).  The length property is always one more than the highest array index.*****************
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// console.log(length);


// ***************************Accessing the First Array Element & the Last Array Element **************
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);


// ****************************** Adding Array Elements ___The easiest way to add a new element to an array is using the push() method:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push('banana');
// fruits.push('lemon');
// fruits.push('jackfruit');
// console.log(fruits);
// console.log(fruits.push('lemon','jackfruit','jambura'));
// fruits.push('lemon','jackfruit','jambura');
// console.log(fruits);

// ***********************create a new array using built-in array constructor new Array()
// const points = new Array(40, 100, 1, 5, 25, 10);
// console.log(points);


// ************************ to Recognize an Array********************************
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(typeof(fruits));

// **********defined a new method Array.isArray():
// console.log(Array.isArray(fruits));

// ******************** Array join() ______The join() method also joins all array elements into a string.  but in addition you can specify the separator:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join(' * '));
// The pop() method removes the last element from an array:
// console.log(fruits.pop());
// The push() method adds a new element to an array (at the end):
// fruits.push('jackfruit');
// console.log(fruits);

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// fruits.shift();
// console.log(fruits);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// fruits.unshift('papaya');
// console.log(fruits);


// Using delete() leaves undefined holes in the array.
// delete fruits[0];
// console.log(fruits);

// The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
let persons = myBoys.concat(myGirls);
console.log(persons);