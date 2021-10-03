// Strings, Numbers, Booleans

/* Type Coercion
if (condition) {
    actual thing to be done
} else if (condition) {
    actual thing to be done
} else {
    actual things to be done
}
*/

/*
If sunny, display "Happy"
If cloudy, display "Sad"
If neither, display, "Happy && Sad"
*/
// const weather = "rainy";

// if (weather === "sunny") {
//   console.log("happy");
// } else if (weather === "cloudy") {
//   console.log("sad");
// } else {
//   console.log("Happy && Sad");
// }

// hello("Etsub", 17, "male");

function addition(num1, num2) {
  const sum = num1 + num2;
  const difference = num1 - num2;
  console.log(difference);
  return sum;
}

const functionAnswer = addition(2, 3);
console.log(functionAnswer);

// const helloPerson = (name, age, gender) => {
//   console.log(`Hello, my name is ${name} and I am ${age}. I am ${gender}.`);
// };

// helloPerson("Michael", 15, "male");

const numbersList = [1, 3, 4, 6, 1, 60, 32, 10];
//                   0  1  2  3  4  5    6   7
// console.log(numbersList[2]);
console.log();
const start = undefined;
console.log(start);

const consoles = {
  log: function (name) {
    name;
  },
};

const etsub = {
  age: 17,
  lives: "10411 Madison Dr.",
  hairColor: "black",
  homeCountry: "Ethiopia",
  isOver18: false,
  introduction: function () {
    console.log("Hello, my name is Etsub.");
  },
};

etsub.introduction();

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i += 2;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
