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

if (score === 0) {
  alert(`You got ${score}. Try harder next time!`);
} else if (score === 1 || score === 2) {
  alert(`You got ${score}. You can do better!`);
} else {
  alert(`You got ${score}. Excellent work!`);
}
