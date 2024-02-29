"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//  enhanced object literals
//  new array
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// new object literal
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [[weekdays[5]]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// WORKING WITH  STRINGSS
const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log("B737"[0]);
console.log(airline.length);
console.log("B737".length);
//METHODDS WHEN WORKING WITH  STRINGSS
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

//slice
console.log(airline.slice(4));
/*
// MAP ITERATION
const question = new Map([
  ["question", "what is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);
console.log(question);

//convert objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// quiz app
console.log(question.get("question"));
// iteration is possible on maps because maps are also iterables
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// convert map to arrray
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

// MAP
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("Categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("Categories"));
rest.delete(2);
// rest.clear();

const array = [1, 2];
rest.set(array, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(array));

// SETS
const ordersSet = new Set(["Pasta", "Pizza", "Risotto", "Pasta", "Pizza"]);
console.log(ordersSet);

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("Jezemiah").size);

// looping objects
// PROPERTY NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

// Entries
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  // console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// console.log(restaurant);

//optional chaining(ES 2020)
// jUST IF statement
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
// console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

//ARRAYS
const users = [{ name: "Jezemiah", email: "jezemiahsam48@gmail.com" }];
console.log(users[0]?.name ?? "User Array Empty");
// without optional chaining we would have written something like
if (users.length > 0) console.log(users[0].name);
else console.log("User Array Empty");

// THE FOR OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

// Nullish: null and undefined (Not 0 or '' )
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// Short circuting
console.log("--- 0R ---");
// Use Any data type
// they cab return any data type
// they can also do short circurting
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

// real application of short circuting
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("--- AND ---");
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "Jonas");

// real world application
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// DESTRUCTURING
// Rest Pattern and Parameters
// rest i sto pack elemeents into arrays

// spread on the right side of the assignment operator
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// we can also use it on the left side with destructuring, REST because left side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rissotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, rissotto, otherFood);

// rest in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//fUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");

//Spread operator
//old way
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//literables : arrays , strings , maps ,sets NOT Objects

//string
const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Jez`);

// functions arugments and real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// //new way using spread operator
// restaurant.orderPasta(...ingredients);

//since ES 2018 spread operator works on objects
const newResturant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newResturant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
// Destructuring Objects
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objecta
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


// CODING CHALLENGE ONE
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task1
// const players1 = game.players[0];
// console.log(players1);
// const players2 = game.players[1];
const [players1, players2] = game.players;
// console.log(players2);

// task2
const [gk, ...fieldPlayers] = players1;
// console.log(gk);

// task 3
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// task 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// task 5
// const { team1, x:draw, team2 } = game.odds;
// another way for task 5
const {
  odds: { team1, x: draw, team2 },
} = game;

// task 6
function printGoals(...playerNames) {
  // console.log(playerNames);
  // console.log(`${playerNames.length} goals were scored`);
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// task 7
team1 < team2 && console.log("team 1 is more likely to win");
team1 > team2 && console.log("team 2 is more likely to win");

// #2 challenge with the same object
// task 1
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

// 2
const odds = Object.values(game.odds);
let sum = 0;
let average;
for (const odd of odds) {
  // console.log(average);

  sum += odd;
  average = sum / odds.length;
  // average =
}

console.log(sum);
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// task 1
const events = new Set(gameEvents.values());
console.log(events);
// converting to an array
const newArrayEventsSet = [...events];
console.log(newArrayEventsSet);

//task 2
gameEvents.delete(64);
console.log(gameEvents);

// task 3
const durationOfGame = 90;
const numberOfEvents = gameEvents.size;
const averageTimeBetweenEvents = durationOfGame / numberOfEvents;

const time = [...gameEvents.keys().pop()];

console.log(
  `An event happened, on avearage, every ${averageTimeBetweenEvents} minutes`
);

// to make it more specific for 90 minuutes
console.log(
  `An event happened, on avearage, every ${time / gameEvents.size} minutes`
);

// task 4
for (const [minutes, event] of gameEvents) {
  const half = minutes <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${half}] ${minutes} : ${event}`);
}
*/
