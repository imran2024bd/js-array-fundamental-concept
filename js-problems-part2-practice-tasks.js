// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137 , 1];
// Ascending ----> smaller to larger
// const heights_asc = heights2.sort();
// console.log(heights_asc);

// Descending --> larger to smaller:
// const numbers_dsc = [...heights2].sort(function (a, b) { return b - a });
// const numbers_dsc = [...heights2].sort(function (a,b) {return b-a });
// console.log(numbers_dsc);

//**************************************************************************************************************
// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// console.log(heights2.sort());

// const smallestName = [...heights2].sort(function (a , b) { return b - a});
// console.log(smallestName);

//**************************************************************************************************************

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

// const laptop = 35000;
// const tablet = 15000;
// const mobile = 20000;
// const calculateElectronicsBudget = laptop + tablet + mobile;
// // const calculateElectronicsBudget = laptop + (tablet *2) + mobile;    // if it counting  2  tablet
// console.log(calculateElectronicsBudget);

// *******************************************************************************************************
// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. 
//Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input


    // const phones = [
    //     { model: "PhoneA", brand: "Iphone", price: 95000 },
    //     { model: "PhoneB", brand: "Samsung", price: 40000 },
    //     { model: "PhoneC", brand: "Oppo", price: 26000 },
    //     { model: "PhoneD", brand: "Nokia", price: 35000 },
    //     { model: "PhoneE", brand: "Iphone", price: 105000 },
    //     { model: "PhoneF", brand: "HTC", price: 48000 },
    // ];

    // output
    // 01. At first we define phones an array . It has 6 ( phones.length) values in a phone array i,e: it has a 5 index . 
    // 02.  In a phones array  { model: "PhoneA", brand: "Iphone", price: 95000 } its a object . then we find any values of object properties.
    // 03. const person = {firstName:"John", lastName:"Doe", age:46};
    // 04. console.log(person.firstName);
    // 05 .Firstly we calculate PhoneA = { model: "PhoneA", brand: "Iphone", price: 95000 } its 01 position and its has 0 index  by this way and rest of others.
// const PhoneA = phones[0];
// console.log(PhoneA);
// const PhoneA_price =PhoneA.price;
// console.log(PhoneA_price);

// const totalphonesprice = phones[0].price + phones[1].price + phones[2].price + phones[3].price + phones[4].price + phones[5].price ;
// console.log(totalphonesprice);
// const totalphones = phones.length
// console.log(totalphones);
// const findAveragePhonePrice = totalphonesprice / totalphones;
// console.log(parseInt (findAveragePhonePrice));


//**************************************************************************************************************




// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. 
// Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

        // output =>
        const shahin_salary = employees[0].starting + employees[0].increment
        // console.log(shahin_salary);
        const shihab_salary = employees[1].starting + employees[1].increment
        const shikot_salary = employees[2].starting + employees[2].increment
        const shohel_salary = employees[3].starting + employees[3].increment
        const total_salary_company = shahin_salary + shihab_salary + shikot_salary + shohel_salary
        console.log(total_salary_company);