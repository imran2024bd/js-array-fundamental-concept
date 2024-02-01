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
const points = new Array(40, 100, 1, 5, 25, 10);
// console.log(points);


// ************************ to Recognize an Array********************************
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(typeof(fruits));

// **********defined a new method Array.isArray():
console.log(Array.isArray(fruits));