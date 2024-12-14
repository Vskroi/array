// Array exercises 1
// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
    let arr2 = arr.map((num) => num * 2)
    return arr2
}
console.log(doubleNumbers([1, 4, 2, 5, 10]))
// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// Take an array of numbers and make them strings
function stringItUp(arr) {
    // your code here
    let arr2 = arr.toString().split(',')
    return arr2
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names
function capitalizeNames(arr) {
    let res = arr.map((name) => {
        return name.toLowerCase().charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });

    return res

}


console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4) Make an array of strings of the names
function namesOnly(arr) {
    // your code here

    return arr.map((age) => age.name)
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80,
    },
    {
        name: "Eric Jones",
        age: 2,
    },
    {
        name: "Paris Hilton",
        age: 5,
    },
    {
        name: "Kayne West",
        age: 16,
    },
    {
        name: "Bob Ziroll",
        age: 100,
    },
])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr) {
    // your code here
    let arrAge = arr.map((person) => { if (person.age <= 16) { return person.name + ' under age' }
else {return person.name+ 'can go to The Matrix'} })
    
    return arrAge
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80

    },
    {
        name: "Eric Jones",
        age: 2

    },
    {
        name: "Paris Hilton",
        age: 5

    },
    {
        name: "Kayne West",
        age: 16

    },
    {
        name: "Bob Ziroll",
        age: 100

    }

]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
 
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
 
*/


function doubleValues(arr) {
   
        let arr2 = arr.map((num) => num * 2)
        return arr2
    
 
 }
console.log(doubleValues([1,2,3]));
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
 
Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]
 
*/
 function onlyEvenValues(arr) {
    let arr2 = arr.filter((num) => num % 2==0)
    return arr2
 }
console.log(onlyEvenValues([1, 2, 3, 4, 5, 7, 8, 9, 10, 11]));

// console.log(filteredNumbers);F

// console.log(`Initial array ${numbers}`);

// numbers.pop();
// console.log(`Popped array ${numbers}`);

// numbers.push(123);
// console.log(`Pushed array ${numbers}`);

// numbers.shift();
// console.log(`shifted array ${numbers}`);

// numbers.unshift(1234123);
// console.log(`Unshifted array ${numbers}`);

// const string = "string";
// console.log(string.split(""));
// const arrayOfStings = string.split("");
 

 
/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:
 
(1) an array
 
Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.
 
 
 
To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31.
 
i.e. is31Flavors(originalFlavors) will return TRUE.*/
    const arr = [
        "Banana Nut Fudge",
        "Black Walnut",
        "Burgundy Cherry",
        "Butterscotch Ribbon",
        "Cherry Macaron",
        "Chocolate",
        "Chocolate Almond",
        "Chocolate Chip",
        "Chocolate Fudge",
        "Chocolate Mint",
        "Chocolate Ribbon",
        "Coffee",
        "Coffee Candy",
        "Date Nut",
        "Eggnog",
        "French Vanilla",
        "Green Mint Stick",
        "Lemon Crisp",
        "Lemon Custard",
        "Lemon Sherbet",
        "Maple Nut",
        "Orange Sherbet",
        "Peach",
        "Peppermint Fudge Ribbon",
        "Peppermint Stick",
        "Pineapple Sherbet",
        "Raspberry Sherbet",
        "Rocky Road",
        "Strawberry",
        "Vanilla",
        "Vanilla Burnt Almond",
      ];
     if(31===arr.length){console.log('true')}
     else{console.log('false')}




/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor.
 
Your function should accept:
 
(1) an array
(2) a flavor

 
 
 
Your function should add the flavor to the front of the array and console.log the resulting array.
 
For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */

function addFlavor(array, flavor) {
    
   let str = (flavor + array).split(',')
   
return str
 }
 const originalFlavors = [
    "Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond",
  ];
  console.log(addFlavor(originalFlavors,' Rainbow Sherbert, '))

/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array.
 
Your function should accept:
 
(1) an array
 
Your function should remove a flavor from the end of the array and console.log the resulting array.
 
 
 
For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/
function addFlavorO(flavor) {
    const text = [
        "Banana Nut Fudge",
        "Black Walnut",
        "Burgundy Cherry",
        "Butterscotch Ribbon",
        "Cherry Macaron",
        "Chocolate",
        "Chocolate Almond",
        "Chocolate Chip",
        "Chocolate Fudge",
        "Chocolate Mint",
        "Chocolate Ribbon",
        "Coffee",
        "Coffee Candy",
        "Date Nut",
        "Eggnog",
        "French Vanilla",
        "Green Mint Stick",
        "Lemon Crisp",
        "Lemon Custard",
        "Lemon Sherbet",
        "Maple Nut",
        "Orange Sherbet",
        "Peach",
        "Peppermint Fudge Ribbon",
        "Peppermint Stick",
        "Pineapple Sherbet",
        "Raspberry Sherbet",
        "Rocky Road",
        "Strawberry",
        "Vanilla",
        "Vanilla Burnt Almond",
      ];
    
    let str = (flavor + text).split(',')
    str.pop()
   
 return str
  }
  
   console.log(addFlavorO('Rainbow Sherbert, '))

/* Task 4: Write a function that returns a flavor at a given index in the array.
 
Your function should accept:
 
(1) an array
(2) an index
 
For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

   
      function getFlavorByIndex(arr , index){
if(index >= 0 && index < arr.length){
    return arr[index]
}
}

console.log(getFlavorByIndex(originalFlavors, 1))
/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array.
 
Your function should accept:
 
(1) an array
(2) a string (flavor)
 
For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla.
 
Hint: You can use .splice() for this
 
*/
// function removeFlavorByName( arr , string){
// let venilla = arr.indexOf(string)

// return arr[venilla] 

// }
// console.log(removeFlavorByName(originalFlavors, "Vanilla"))

// function songoh(originalFlavors){
//     let songosonUg = "Vanilla";
//     for (i = 0; i <originalFlavors.length; i++){
//         if(originalFlavors[i] = songosonUg){return originalFlavors[i] + originalFlavors.indexOf('Vanilla')
// 
//         }
//     }
// }
// console.log(songoh(originalFlavors))

/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array.
 
Your function should accept:
 
2 arguments 1 for your new array and one for your original array
 
and should return a new array that is identical to the old array. You can name the new array however you'd like. */
const copytext = []
function copy(arr,copy){ 
    
    for(let i = 0 ; i< arr.length; i++){
        copy[i] = arr[i]
    }
    return copy
    

}
console.log(copy(originalFlavors,copytext))
/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.
 
Your function should accept:
 
(1) an Array
(2) a string (i.e. "chocolate")
 
and return a new array.
 
For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].
 
DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.
 
hint - you can use the .includes method to help you solve this */

 function filterByWord(array, word) {
   
   array.forEach(function (flavor) {
    
     if (flavor.includes(word)) {
        console.log(flavor);
     }
   });
  
 }

 console.log(filterByWord( originalFlavors , 'Chocolate'));
/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.
 
Your function should accept:
 
(1) an array
 
and should return the average number of words per item in the array.
 
For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */
const numberReturn = []

function getAverageWordLength(code , number) {
    /*code here*/
    
    for(let i = 0 ; i < code.length; i++ ){
        number[i] = code[i].split(' ')
        .filter((n) => { return n != '' })
        .length
        
    }
    
     number.reduce((num, num2) =>{return num+=num2})
    return number
}
console.log(getAverageWordLength(originalFlavors , numberReturn))

//Array exercises 2
// Exercise 1
// Write a JavaScript function to sort three numbers in array. Return sorted array.
// Sample numbers : [0, -1, 4]
// Output : [4, 0, -1]
// notes:
//     https://www.geeksforgeeks.org/javascript-array-sort/
//     https://www.w3schools.com/jsref/met_win_alert.asp
 
// 1. write function ==> function will take array as input
// 2. sort the numbers inside the array and return sorted array
 
function sortedArray(array) {
    let arr = array.sort((num1, num2)=>{return num1-num2})
    return arr
}
 
console.log(sortedArray([5, 7, 10, -10, 56]));
// ==> [56, 10, 7,5,-10]

 
 
// 
//Exercise 1
// 
//Create a function that will display the smallest value in the array.
// 
//Example:
function sortedArray2(array) {
    let arr = array.sort((num1, num2)=>{return num1-num2})
    return arr[0]
}
console.log(sortedArray2([30, 45, 60, 7]));
//> 1
//
// 
//Exercise 2
// 
//Create a function that will accept an array, check the data type of each element. The function will delete string elements and will return a the new array
// 
//Example:
function numbersOnly(text){
let number = text.filter((num1,num2)=>num1>num2)
return number
}
 console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));
//> [ 3, 7, 13 ]
// 
//Exercise 3
// 
//Create a function that will accept an array and do the following:
//Get the lowest element
//Get the highest element
//Get the length of array
//Get the Average of all element;
//Store these criteria in a new array
// 
//Example:
function minMaxLengthAverage2(number) {
    const lowest = Math.min(...number);
    const highest = Math.max(...number);
    const length = number.length;
    const average = number.reduce((sum, current) => sum + current, 0) / length;
    return [lowest , highest, length, average];
  }
  console.log(minMaxLengthAverage2([7, 13, 3, 77, 100]));
//> [ 3, 100, 5, 40 ]
// 
//Exercise 4
// 
//Count the number of Words
//Return how many words was given
// 
//Example:
function countWords(text){
    let textNumber =1;
    for(let i = 0 ; i < text.length; i++ ){
        
         textNumber = textNumber + text[i].split('').filter((n) => { return n == ' ' }).length
    }
    return textNumber
    
}
    
    
console.log(countWords('hello from kbpsystem!'));
//> 3
// 
//Exercise 5
// 
//Multiply by Length
//Multiply all elements in an array by it's length
// 
//Example:
//> MultiplyByLength([4,1,1]);
function MultiplyByLength(number){
 let a = number.map((num)=>num*3)
return a
}


 console.log(MultiplyByLength([4,1,1])) 
//> [12, 3, 3]
// 
//Exercise 6
// 
//Find the correct Index location
//Return the index location of an element from a given array. First argument is the array you'd like to search and the second one is the element (either string/number) to look for.
// 
//Example:
function findIndex(arr , find){
    let number = arr.filter((arr)=> arr==find).length
    return number
}
console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'gitlab'));
//> 1
// 
//*/
// 
// 
//Array and Object exercises
// ==== ADVANCED Array Methods ====
 
// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.
 
const zooAnimals = [
  {
    animal_name: "Jackal, asiatic",
    population: 5,
    scientific_name: "Canis aureus",
    state: "Kentucky",
  },
  {
    animal_name: "Screamer, southern",
    population: 1,
    scientific_name: "Chauna torquata",
    state: "Alabama",
  },
  {
    animal_name: "White spoonbill",
    population: 8,
    scientific_name: "Platalea leucordia",
    state: "Georgia",
  },
  {
    animal_name: "White-cheeked pintail",
    population: 1,
    scientific_name: "Anas bahamensis",
    state: "Oregon",
  },
  {
    animal_name: "Black-backed jackal",
    population: 2,
    scientific_name: "Canis mesomelas",
    state: "Washington",
  },
  {
    animal_name: "Brolga crane",
    population: 9,
    scientific_name: "Grus rubicundus",
    state: "New Mexico",
  },
  {
    animal_name: "Common melba finch",
    population: 5,
    scientific_name: "Pytilia melba",
    state: "Pennsylvania",
  },
  {
    animal_name: "Pampa gray fox",
    population: 10,
    scientific_name: "Pseudalopex gymnocercus",
    state: "Connecticut",
  },
  {
    animal_name: "Hawk-eagle, crowned",
    population: 10,
    scientific_name: "Spizaetus coronatus",
    state: "Florida",
  },
  {
    animal_name: "Australian pelican",
    population: 5,
    scientific_name: "Pelecanus conspicillatus",
    state: "West Virginia",
  },
];
 
//  Request 1: .forEach()
// The zoos want to display both the scientific name and the animal name in front of the habitats.
// Populate the displayNames array with only the animal_name and scientific_name of each animal.
// displayNames will be an array of strings, and each string should follow this
// pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."
 
function displayNames(array) {
  array.forEach(function (element) {
    console.log(
      `name: ${element.animal_name}, scientific: ${element.scientific_name}`
    );
  });
}
 
console.log(displayNames(zooAnimals));
 
/* Request 2: .map()
The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.
*/
 function animalNameOnly(name){
   let nameLowCaseAnimelName = name.map((name)=>name.animal_name).join('-').toLowerCase().split('-')
   return nameLowCaseAnimelName
 }
 console.log(animalNameOnly(zooAnimals))
/* Request 3: .filter()
The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.
*/
 function animalPopulation(population){
    let number = population.filter((num)=>num.population < 5)
    let name = number.map((num)=> num.animal_name)
    return name
 }
 console.log(animalPopulation(zooAnimals));
/* Request 4: .reduce()
The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.
*/
 function  animalPopulationReduce(number){
let numberReduce = number.reduce((num,num2)=>num + num2.population,0)
return numberReduce
 }
 console.log(animalPopulationReduce(zooAnimals))
// ==== Callbacks ====
 
/* Step 1: Create a higher-order function
* Create a higher-order function named consume with 3 parameters: a, b and cb
* The first two parameters can take any argument (we can pass any value as argument)
* The last parameter accepts a callback
* The consume function should return the invocation of cb, passing a and b into cb as arguments
/* Step 2: Create several functions to callback with consume();
* Create a function named add that returns the sum of two numbers
* Create a function named multiply that returns the product of two numbers
* Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
/* Step 3: Check your work by un-commenting the following calls to consume(): */
// 4
// 160 // Hello Mary Poppins, nice to meet you!
function consume(a, b , cb){
    return cb(a, b)
}

function sum(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}

console.log(consume(1, 2 , sum))
console.log(consume(1, 2 , multiply))
 
///////////////Menu Items (MVP)///////////////////
 
const latte = { name: "Cafe Latte", price: 4, category: "Drinks" };
const burger = { name: "Burger", price: 18, category: "Lunch" };
const breakfastBurrito = {
  name: "Breakfast Burrito",
  price: 16,
  category: "Breakfast",
};
 
/* Task 1a: write a function to return more menu items with the same format as the items above. */
 
function createMenuItem(name, cost, category) {
    
    return {
      name: name,
      cost: cost,
      category: category
    };
  }
  console.log(createMenuItem("Cafe Latte", 4, "Drinks",))
  console.log( createMenuItem("Burger", 18, "Lunch",createMenuItem))
  console.log( createMenuItem ("Breakfast Burrito",16,"Breakfast",createMenuItem ))
 
//  let menu2 = []
//  function createMenuItem(name, cost, category , callback) {
//      let menu = {name: name, price: cost, category: category}
//       callback(menu)    
//  }
//  function createMenuItemm(menu){
//     menu2.push(menu)
//  }
//  createMenuItem("Cafe Latte", 4, "Drinks",createMenuItemm);
//  createMenuItem("Burger", 18, "Lunch",createMenuItemm);
//  createMenuItem("Breakfast Burrito", 16,  "Breakfast",createMenuItemm)
//    console.log(menu2)
 
/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */
 
/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter.
Your method should accept:
(1) A string (teacher, student, or public)
and should return a number.
For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/
 
///////////////Reviews (MVP)///////////////////
 
const reviews = [
  {
    name: "Daniela",
    rating: 5,
    feedback: "Beautiful atmosphere and wonderful vegan options!",
  },
  {
    name: "Jack",
    rating: 3,
    feedback:
      "A little too hipster for my taste, but the burger was decent, if overpriced",
  },
  { name: "Miranda", rating: 4, feedback: "fun trivia and cool vibes" },
  {
    name: "Wen",
    rating: 4.5,
    feedback:
      "I don't leave my house often, but when I do, it's for this place. Highly reccomend.",
  },
  {
    name: "Brett",
    rating: 3,
    feedback:
      "great selection of snacks and a nice cafe area to get work done during the day.",
  },
  {
    name: "Julius",
    rating: 2,
    feedback:
      "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it.",
  },
  {
    name: "Lauren",
    rating: 4,
    feedback:
      "Absolutely love that they have karaoke Fridays! Food and drink selection is okay.",
  },
  { name: "Reyna", rating: 3.5, feedback: "" },
];

 
/* Task 3: Console.log just Julius' feedback */
function feedback(feed){
    let a  = feed[5].feedback
    return a
 }
 console.log(feedback(reviews))       
/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */
 
/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"
/*  Task 6: Write a function to return a review based on the index of the review in the array.
Your function should take two arguments:
(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.
and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
*
* For example, if getReviewByIndex is invoked with reviews and the number 0
* it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/
function getReviewByIndex(reviews, index) {
  /* code here */
}
 
/* Exercise 12
 
Create the use object and the object should have following key
firstName
lastName
currentLocation
favoriteSongs
age
 
1. console log 'hello user's firstname and Lastname'
2.How's the weather in 'currentLocation'
3. console log user's favorite songs
 
/* STRETCH 3:  This challenge is not related to the data above!
Write a function called carMarker
Your function should accept:
(1) a single odometer argument (a number)
and return an object.
The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.
*/
 
function carMaker(/* code here */) {
  /* code here */
}
 
/*
  To get started:
  1. Remove the lines involving the removeThisToStart variable, so that the
     program doesn't exit early.
  2. Implement userCanAffordSofa
*/
 
// Exercise 13
 
let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
  astronautID: 1,
  move: move(),
};
let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
  astronautID: 10,
  move: move(),
};
let animal1 = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronautID: 5,
  move: move(),
};
let animal2 = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
  astronautID: 7,
  move: move(),
};
let animal3 = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
  astronautID: 3,
  move: move(),
};
function move() {
  return Math.round(Math.random() * 10);
}
// After you have created the other object literals, add the astronautID property to each one.
//Create an array to hold the animal objects.
 
// Print out the relevant information about each animal.
// return `${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.`;
function crewReports(animal) {}
 
// Exercise 14
 
var movieDatabase = {
  title: "Pulp Fiction",
  duration: 120,
  stars: ["Bruce Willis", "Uma Thurman"],
};
// write the function to return Movie name and duration and start
 
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// const recipe = {
//   title: "Mole",
//   servings: 2,
//   ingredients: ["cumin", "cinnamon", "cocoa"],
// };
// console.log title of the recipe
// console.log 'Servings: recipe servings'
//console.log the ingredients one by one
 
// //Task2
 
// let programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
// };
 
// Write the command to add the language "Go" to the end of the languages array.
// Change the difficulty to the value of 7.
// Using the delete keyword, write the command to remove the jokes key from the programming object.
// Write the command to add a new key called isFun and a value of true to the programming object.
// Using a loop, iterate through the languages array and console.log all of the languages.
// Using a loop, console.log all of the keys in the programming object.
// Using a loop, console.log all of the values in the programming object.
 
// /Menu Items (MVP)///////////////////
 
// const latte = {
//   name: "Cafe Latte",
//   price: 4,
//   category: "Drinks",
// };
 
// const burger = { name: "Burger", price: 18, category: "Lunch" };
// const breakfastBurrito = {
//   name: "Breakfast Burrito",
//   price: 16,
//   category: "Breakfast",
// };
 
// /* Task 1a: write a function to return more menu items with the same format as the items above. */
 
// console.log(createMenuItem("Buuz", 45, "Breakfast"));
// console.log(createMenuItem("Buuz", 45, "Breakfast"));
// console.log(createMenuItem("Buuz", 45, "Breakfast"));
// console.log(createMenuItem("Buuz", 45, "Breakfast"));
// console.log(createMenuItem("Coffee", 5, "Dinner"));
// /* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */
 
// /* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter.
 
// console.log(burger.discount("student"));
// console.log(burger.discount("public"));
// c;
 
 
