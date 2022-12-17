// A. Comparison Operators// = use to compair two value and return a boolean value.
//Comparison and Logical operators are used to test for true or false.

// 1. == (Equal to / double equal : check only equal value  not data type)

console.log(9 == 9); //return true
console.log(9 == "9"); // return true
console.log(9 == 7); //return false

//2. === ( triple  equal : check both equal value and data type )

console.log(9 === 9); //return true
console.log(9 === "9"); // return false , because 9 is number type & "9" is string type data

// 3. != (Not equal : use to check not eual value)
console.log(9 != 9); // return false

// 4.  !== (not equal / not double equal : use to check both data value and data type)
console.log(15 !== 14); // return true

// 5. > (greater than)
console.log(15 > 16); // return false
console.log(15 > 14); // return true

// 6.  < (Less than)
console.log(25 < 30); // return true
console.log(31 < 30); // return false

// 7. >= Greater than equal: use to detect one value from another which is greater or equal.
console.log(22 >= 22); // return true
console.log(22 >= 25); // return false

// 8. <= less than equal: use to detect one value from another which is less or equal.
console.log(27 <= 22); // return false
console.log(24 <= 24); // return true

// 9. ? (ternary operator) : we will learn it latter.

// B. Logical operators//
// 1. && (Logical and : compair both two true data condition)
let a = 6;
let b = 5;
console.log(a < 9);
console.log(b > 3);
console.log(a < 9 && b > 3); // if two data condition is correct then return true
console.log(a > 9 && b > 3); // if one or two data condition is incorrect  then return false

// 2. || (Logical or : compair one true data condition between two. if one or both condition is true then return "true". if both ccondition is incorrect then returns "false" )
let c = 12;
let d = 18;
console.log(c > 9);
console.log(d < 3);
console.log(c > 9 || d > 10); // if two data condition is correct then return true

console.log(c > 9 || d < 10); // if one data condition is correct then return true

console.log(c < 9 || d < 3); // if  two data condition is incorrect  then return false

// 3. ! (Logical not: always Return opposit value. eg- if true it returns false and if false it returns true)

console.log(c == d); // return false because currect condition.
console.log(!(c == d)); // return true because use of logical not condition.

// C. Operator precedence : For simply remember > "B O D M A S"
/*
    B = Backet
    O = Orders/Power
    D = Divission
    M = Multiplication
    A = Addition
    S = Subtraction
*/
console.log((36 / 6) * 3 + 2 ** 2 - (3 + 5));
// 6 * 3 + 2 ** 2 - 8
// 6 * 3 + 4 - 8
// 18 + 4 - 8
// 22 - 8
// 14

// D. Template Literals :
const firstName = "Ponkoj";
const lastName = "Mondol";
let age = 38;
let job = "Web Developer";
const country = "Bangladesh";

console.log("I'm Ponkoj mondol, 38 years old web developer"); // We can't use this.

// (``) = Backtrace
console.log(`I'm ${firstName} ${lastName}, ${age} years old ${job}`); // We use like this.
console.log(`I love ${country}`);

// another example
let e = 30;
let f = 50;
console.log(`Tour total balance is ${e + f} Taka`);

// Line Break in Backtrace
console.log(`First line
Second line
Third line
Fourth line`);

// E. If / Else Statements
let g = 9;
let h = 10;
if (g > h) {
  console.log(" G is bigger then H");
} else {
  console.log(`H is bigger then G`);
}

if (10 > 15) {
  console.log("Display 10");
} else {
  console.log("Display 15");
}
