console.log("Starting javascript...");

//Ex1

var myName = "Lefteris";

console.log(myName);

//Ex2

var age = 24;

console.log(age);

//Ex3

var ignasiAge = 32;

var ageDiff = ignasiAge - age;

console.log(ageDiff);

//Ex4

var number = 21;

if (age > number) {
  console.log("You are older than 21");
} else {
  console.log("You are not older than 21");
}

//Ex5

if (age > ignasiAge) {
  console.log("Ignasi is younger than you");
} else if (age < ignasiAge) {
  console.log("Ignasi is older than you");
} else {
  console.log("You have the same age as Ignasi");
}

//Arrays Ex1

var names = ["Lefteris", "Viola", "Pol", "Mari", "Ray"];

names.sort();
console.log(names[0]);
console.log(names[4]);

for (i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//Arrays Ex2

var ages = [24, 23, 28, 26, 31];

for (i = 0; i < ages.length; i++) {
  if ((ages[i] % 2) === 0) {
    console.log(ages[i]);
  }
}


//Arrays Ex3

var arrayNum = [7, 33, 1, 29, 22, 12, 31, 11];

function arrayMin(arr){
  var min = arr[0];
  for (i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
  console.log(min);
}

arrayMin(arrayNum);


//function minNumber(array) {
//  var minNum = Math.min.apply(Math, array)
//  console.log(minNum)
//}
//
//minNumber(arrayNum);


//Arrays Ex4

function arrayMax(arr){
  var max = arr[0];
  for (i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
  console.log(max);
}

arrayMax(arrayNum);

//function maxNumber(array) {
//  var maxNum = Math.max.apply(Math, array)
//  console.log(maxNum)
//}
//
//
//maxNumber(arrayNum);


//Arrays Ex5

var numIndex = 4;

function getValue(array, index) {
  var getVal = array[index];
  console.log(getVal)
}

getValue(arrayNum, numIndex);


//Arrays Ex6

var arr = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

function getSame(array){
var sortArr = array.slice().sort();                                    
var results = [];
for (i = 0; i < sortArr.length - 1; i++) {
    if (sortArr[i + 1] == sortArr[i]) {
        results.push(sortArr[i]);
    }
}

console.log(results);
}

getSame(arr);

//Arrays Ex7

myColor = ["Red", "Green", "White", "Black"];

function addTogether(array) {
  var result = array[0] + array[1] + array[2] + array[3];
  console.log(result);
}

addTogether(myColor);


//String Ex1

var reverseNum = 31243;

function reverseNumber(n) {
  n = n + "";
  console.log(n.split("").reverse().join(""));
}

reverseNumber(reverseNum);



//String Ex2

var string = "lefteris";

function alphaOrder(str) {
  console.log(str.split('').sort().join(''));
}

alphaOrder(string);

//String Ex3

var string = "rick and morty";

function upperString(str) {
  var array = str.split(' ');
  var newarray = [];

  for (i = 0; i < array.length; i++) {
    newarray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  console.log(newarray.join(' '));
}

upperString(string);

//String Ex4

var longString = "introduction to javascript";

function longestString(str) {
  var array = str.match(/\w[a-z]{0,}/gi);
  var result = array[0];

  for (var i = 1; i < array.length; i++) {
    if (result.length < array[i].length) {
      result = array[i];
    }
  }
  console.log(result);
}


longestString(longString);



