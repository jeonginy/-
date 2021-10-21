const a = 10;
const c = 2;    //  cannot be changeable
const myName = "jeongin";   
let yourName = "nico";      //  be changeable;be able to be updated : highlt recommended 
var name = "name from var"; // does not have any rules for change or something : need to avoid 

console.log(a+c);
console.log("hello " + myName + " your name cannot be changed");
console.log("hello " + yourName);

yourName = "nico is not your name, anymore";

console.log(yourName);

const amIFat = false;       // "false" is not available
console.log("Am I fat? " + amIFat);

const areYouFat = null;     // meaning nothingness;not happened automatically
let something;              // not be given value;undefined 
console.log(areYouFat, something); // null, undefined 

/*  Array 
const mon = "Mon";
const tue = "Tues";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
const sat = "Sat";
const sun = "Sun";
const dayOfWeek = [mon, tue, wed, thu, fri, sat, sun];
*/

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "jeongin"];
console.log(daysOfWeek);
console.log(nonsense);

// Get Item from Array
console.log(daysOfWeek[5]);
// Add one more day to the array
daysOfWeek.push("Sun");
console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("Pasta");
console.log(toBuy[1]);  //  tomato
console.log(toBuy[3]);  //  Pasta

// parentheses : 괄호
/*
const playerName = "nico";
const playerPoints = 12312313;
const playerHandsome = true;
const playerFat = "little bit";
*/
// ==== Create an Object; instead of squre brackets, use curly brackets ====
const player = {
    name: "nico",
    points: 10,
    fat:false,
};
// The way of accessing inside of the player
console.log(player);      // nico 
console.log(player.name); // nico
console.log(player["name"]); // nico
player.fat = true;
// How to update something inside of the player
player.points = 15;
console.log(player.points);     // 15
player.points = player.points + 15;     //  to add 15 to the current points;30
player.lastName = "potato";
console.log(player);

// ==== Create a function with argument =====
function sayHello(nameOfPerson, age){
    console.log("Hello, I am " + nameOfPerson + " and I Am " + age);
    // hellohellohellohellohellohello
}

sayHello("jeongin", 26);
sayHello("Jayne", 25);

function plus(a, b){
    console.log(a + b);
}
function divide(a, b){
    console.log(a / b);
}
// plus();  - NaN
plus(2, 6);
divide(8, 2);

// How to send arguments
const human = {
    name: "jeongin",
    sayHello: function(arg){
        console.log("Hiiii" + arg + " glad to meet you");
    },
};

console.log(human.name);
human.sayHello("Jayne");

// const isNicoFat = true;  cannot be changed
let isNicoFat = true;
isNicoFat = false;

const me = "sexy";
const arr = [2 , true, me, "lol", "Boom"];
console.log(arr);
arr[3] = "Lol";
console.log(arr);
arr.push("Push");
console.log(arr);

const food = {
    name: "doughnut",
    flavour: "vanila",
};

// console.log(food, console);
console.log(food);
food.flavour = "chocolate"; //  Change flavour vanila to chocolate 
console.log(food);
food.price = 3200;  //  Add price to food
console.log(food);
