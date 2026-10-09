let score = 0;
let answer1 = prompt("Does a dog have puppies or kittens?");

if (answer1 === "puppies") {
  score++;
  alert("Correct! A dog has puppies.");
} else {
  alert("Incorrect! A dog has puppies.");
}

let answer2 = prompt("Does a cat have puppies or kittens?");

if (answer2 === "kittens") {
  score++;
  alert("Correct! A cat has kittens.");
} else {
  alert("Incorrect! A cat has kittens.");
}

let answer3 = prompt("Does a cow have puppies or calves?");

if (answer3 === "calves") {
  score++;
  alert("Correct! A cow has calves.");
} else {
  alert("Incorrect! A cow has calves.");
}

alert(`You got ${score} out of 3 questions correct.`);
