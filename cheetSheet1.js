/*
console.log("Hi there!");

Math.random();

let amount = 6;
let price = 5.99;

let message = "Good night..";
console.log(message.length);

console.log("Howdy".length);

let thisBullean = true;

console.log(Math.random());

console.log(Math.floor(5.87));

// This is a comment line

let x = null;

let singleString = "This is a sinlge string";
let doubleString = "This is a double string.";

console.log(10 % 2);

/*
This is
a multi line 
comment
*/
/*const weeksInYear = Math.floor(365 / 7);
const daysLeftOver = 365 / 7;

console.log(
  "A year has " + weeksInYear + " weeks and " + daysLeftOver + " days."
);

let number = 100;

number = number + 10;
number += 10;

console.log(number);

let age = 7;
"Tommy is " + age + " years old.";
`Tommy is ${age} years old.`;

const currency = "$";
let userIncome = 85000;
*/
/*
var a;
console.log(a);

let cname = "Tammy";
const found = false;
var bage = 3;
*/
//console.log(cname, found, bage);
/*
var age;
let weight;
const numberOfFingers = 20;

let name = "Codecademy";
console.log(`Hello ${name}`);

console.log(`Billy is ${5 + 6} years old!`);
*/
/*
let count;
console.log(count);
count = 4;
console.log(count);

const numberOfColumns = 7;

let service = "Credit card";
let month = "May 30th";
let displayText = "Your " + service + " bill is due on " + month + ".";

console.log(displayText);

true || false; // True
10 > 5 || 10 > 20; // True
false || false; // False
10 > 100 || 10 > 20; // False

let price = 10.5;
let day = "Monady";

day === "Monday" ? (price -= 1.5) : (price += 1.5);

const isTaskCompleted = false;

if (isTaskCompleted) {
  console.log("Task completed");
} else {
  console.log("Task is incomplete");
}
*/
/*
true && true; // true
1 > 2 && 2 > 1; // false
true && false; // false
4 === 4 && 3 > 1; // true

const food = "Salad";

switch (food) {
  case "oyster":
    console.log("The test of the sea is oyster.");
    break;
  case "Salad":
    console.log("Delicious pizza.");
    break;
  default:
    console.log("Enjoy your meal");
}

const isMailSent = false;

if (isMailSent) {
  console.log("Mail sent to recepient");
}

let lateToWork = true;
let oppositeValue = !lateToWork;

console.log(oppositeValue);

1 > 3; // false
3 > 1; // true
250 >= 250; // true
1 === 1; // true
1 === 2; //false
1 === "1"; //false
*/
/*
const size = 10;

if (size > 100) {
  console.log("Big");
} else if (size > 20) {
  console.log("Medium");
} else if (size > 4) {
  console.log("Small");
} else {
  console.log("Tinny");
}

*/
/*
const sum = (firstParam, secondParam) => {
  return firstParam + secondParam;
};

console.log(sum(3, 4));

const printHello = () => {
  console.log("Hello");
};

printHello();
*/
/*
const checkWeight = (weight) => {
  console.log(`Baggage weight: ${weight} kilograms.`);
};

checkWeight(78);

const multiply = (a, b) => a * b;
const addition = (a, b) => a + b;

console.log(multiply(3, 7));
console.log(addition(7, 4));

function sum(number1, number2) {
  return number1 + number2;
}
console.log(sum(3, 4));

function rocketToMars() {
  return "BOOM!";
}

const rocketToMars = function () {
  return "BOOM";
};

const dog = function () {
  return "Woof";
};

function sayHello(name) {
  return `Hello, ${name}`;
}

function sum(num1, num2) {
  return num1 + num2;
}
*/

/*function myFunction() {
  var pizzaName = "Volvo";
}

const isLoggedIn = true;

if (isLoggedIn === true) {
  const statusMessage = "User is logged in.";
}

console.log(statusMessage);
*/
/*

const color = "Blue";

function printColor() {
  console.log(color);
}

printColor();

const numbers = [1, 2, 3, 4];
console.log(numbers.length);

const myArray = [1, 2, 3, 4, 5];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

const card = ["apple", "orange"];
card.push("beer");

const numbers3 = [10, 20, 30];
numbers3.push(40, 50, 60, 70);
console.log(numbers3);
*/
/*
const ingredients = ["eggs", "flour", "chocolate"];
ingredients.pop();
console.log(ingredients);

const names = ["Alice", "Bob"];
names.push("Karl");

const numberArray = [0, 1, 2, 3, 4];

const differentArray = [true, "String", 45];
console.log(differentArray);
*/
/*
while (condition) {
  // code block to be executed
}
*/
/*
let i = 0;
while (i < 20) {
  console.log(i);
  i++;
}

const items = ["apricot", "banana", "cherry"];
for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}
*/
/*
x = 0;
i = 0;

do {
  x = x + i;
  console.log(i);
  i++;
} while (i < 5);

for (let i = 0; i <= 4; i += 1) {
  console.log(i);
}
*/
/*
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
    break;
  }
  console.log(i);
}

for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer} - ${inner}`);
  }
}

let plusFive = (number) => {
  return number + 5;
};

let f = plusFive;

plusFive(3);
f(8);
console.log(plusFive(3));
console.log(f(8));
*/
/*
const isEven = (number) => {
  return number % 2 == 0;
};

let prntMessage = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number; ${isNumEven}.`);
};

prntMessage(isEven, 6);
*/
/*
const originalFunc = (num) => {
  return num + 2;
};

const newFunc = originalFunc;

const functionNameLength = (func) => {
  return func.name.length;
};

functionNameLength(originalFunc);

const returnFunc = () => {
  return newFunc;
};
returnFunc();
*/
/*
const arrayOfNumbers = [0, 1, 2, 3, 4, 5];
const sum = arrayOfNumbers.reduce((x, y) => {
  return x + y;
});
console.log(sum);
*/
/*
const numbers = [28, 77, 45, 99, 27];

numbers.forEach((number) => {
  console.log(number);
});
*/
/*
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter((n) => {
  return n > 5;
});
console.log(filteredArray);

const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

const announcements = finalParticipants.map((member) => {
  return member + " joined the contests.";
});

console.log(announcements);
*/
/*
const apple = {
  color: "Green",
  price: {
    bulk: "$3/kg",
    smallQty: "$4/kg",
  },
};
console.log(apple.color);
console.log(apple.price.bulk);

const classElection = {
  date: "January 12",
};

const student = {
  name: "Sheldon",
  score: 100,
  grade: "A",
};

console.log(student);

delete student.score;
student.grade = "F";
console.log(student);

let mobile = {
  brand: "Samsung",
  model: "Galaxy Note 3",
};

for (let key in mobile) {
  console.log(`${key}: ${mobile[key]}`);
}

const person = {
  firstName: "Matilda",
  age: 27,
  hobby: "knitting",
  goal: "learning javaScript",
};

delete person.hobby; // Or, delete person[hobby];
console.log(person);
*/
/*
const origNum = 8;
const origObj = { color: "white" };

const changeItUp = (num, obj) => {
  num = 7;
  obj.color = "green";
};

changeItUp(origNum, origObj);

console.log(origNum);
console.log(origObj.color);
*/
/*
const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log("The engine sputters...");
  },
};

engine.start("noisily");
engine.sputter();
*/
/*
const rubikCubeFacts = {
  possiblePermutations: "https://www.w3schools.com/",
  invented: "1974",
  largestCube: "17x17x17",
};

const { possiblePermutations, invented, largestCube } = rubikCubeFacts;

console.log(possiblePermutations);
console.log(invented);
console.log(largestCube);
*/
/*
const activity = "Surfing";
const beach = { activity };
console.log(beach);

const cat = {
  name: "Pipey",
  age: 8,
  whatName() {
    return this.name;
  },
};

console.log(cat.whatName());

const restaurant = {
  numCustomers: 45,
  seatCapacity: 100,
  availableSeats() {
    return this.capacity - this.numCustomers;
  },
};
*/
/*
const myObj = {
  data: "abc",
  loggerA: () => {
    console.log(this.data);
  },
  loggerB() {
    console.log(this.data);
  },
};

myObj.loggerA(); // undefined
myObj.loggerB(); // "abc"
*/
/*
const myCat = {
  _name: "Snickers",
  get name() {
    return this_name;
  },
  set name(newName) {
    if (typeof newName === "string" && newName.length > 0) {
      this._name = newName;
    } else {
      console.log("ERROR: name must be an unempty string");
    }
  },
};
console.log(myCat);
*/
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log("Woof!");
    },
  };
};

console.log(dogFactory("Ismail", 45, "kro"));

const myCat = {
  _name: "Dutie",
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  },
};

console.log(myCat.name);

myCat.name = "Yankee";
