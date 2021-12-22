Dec-18
Q-9 -> Write a program to print inverted triangle/pyramid.

n -> 5
5/2 = 2.5 => Math.ceil(2.5) => 3
*****
 ***
  *

Math.floor
1.24 => 1
1.999999 -> 1
2.5 => 2

Math.ceil
1.0000001 => 2
1.45 => 2

n -> 9
9/2 = 4.5 => Math.ceil(4.5) = 5;
*********
 *******
  *****
   ***
    *



Assignment:
Question - 10 -> Write a program to print the pattern.
(Hourglass pattern -> Sands of Time)

n - 5
*****
 ***
  *
 ***
*****

n = 9
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********

Q-11 -> Diamond Pattern
n = 5

  *
 ***
*****
 ***
  *

n = 7

   *
  ***
 *****
*******
 *****
  ***
   *






Interview Questions:

1. Difference between Javascript and Java?
-> JS is scripting language and Java is programming language.
-> JS is dynamically/loosely typed and Java is statically/strongly typed.
-> JS is interpreted and Java is compiled.
-> Java is multi-threaded and JS is single threaded.
-> JS cross platform (Browser, Server, Mobile App, Desktop App).
-> Java is strongly OOP, JavaScript follows Multi-Paradigm approach.

Programming Paradigms -> The way in which we structure and write the program.
-> OOP -> Object Oriented Programming.
-> Functional Programming.
-> Procedural programming.
-> Structured Programming.
-> Encapsulated Programming.
-> Modular Programming.

2. What are different Datatypes in JS
-> Number (-9007199254740991 to 9007199254740991);
-> BigInt (1.7976931348623157e+308)
-> boolean
-> undefined
-> String
-> null
-> Object

3. What is NaN?
-> NaN means that the variable is Not a Number.
-> JS has given the data type of number but the value could not be decided.
-> parseInt(); -> It's a function which takes a string and returns it's number equivalent.
-> The datatype of NaN is a number;

4. Difference between == and === and =.
-> == Checks for data values. (It does something called as Type Juggling).
-> === Checks for the value as well as the Datatype.
-> = is assignment operator. It will assign the value.

5. What will be the output of;
->  post increment 
and pre increment.

i++; <- Post increment / decrement
++i; <- Pre increment / decrement

let i = 10;
console.log(i++);
-> 10;


let i = 14;
let j = i++; //-> let j = i; i = i + 1;
console.log(j);
//console.log(i);
-> 14


let i = 14;
let j = ++i;
console.log(j);
-> 15

let i = 14;
i++;
console.log(i);
-> 15

let i = 14;
++i;
console.log(i);
-> 15

6. Type coercion -> JS will automatically conver the datatypes to operate.

-> What will be the output of
console.log(1+2+3+4+5+"6");

//Under the hood
-> console.log(3+3+4+5+"6");
-> console.log(6+4+5+"6");
-> console.log(10+5+"6");
-> console.log(15+"6");
-> console.log("156") -> "156";

-> 12345 ❌
-> 66 ❌
-> 156 ✔
-> 1056 ❌


console.log(1+2+3+4+5+"6"+7+8+9);

//Under the hood
-> console.log("156" + 7 + 8 + 9);
-> console.log("1567" + 8 + 9);
-> console.log("15678" + 9);
-> console.log("156789"); -> "156789"
->156789

/ BODMAS -> Maths
/ BEDMAS Rule -> Programming
-> Brackets
-> Exponents
-> Division
-> Multiplication
-> Addition
-> Subtraction


Further Reading:
1. Callback hell.
Q. Coding -> Largest Substring in a string
-> Largest subset from an array.

-> have the function largest four (arr) take the array of integers stored in arr and find the four largest elements and return their sum.for example: arr is [4,5,-2,3,1,2,6,6] then the four largest elements in this is 6,6,4,5 total sum is 21?

----

Interview Questions:

1. Difference between var vs let vs const.
2. What is a closure.
3. What is a callback.
4. What is fetch.
5. What is chaining. ( .then chaining);
6. What is promises.
7. What is an API -> with example.
8. What is asynchronous programming in general (specific to JS)
9. What is a scope? What is scope chaining.
10. Call apply bind
11. Hoisiting
12. What is this keyword.
13. anagram / palindrome / fibonacci.
14. Coding -> Pattern.
15. Coding -> Remove a duplicate element
16. Coding -> Reverse a string with words.
17. Give Features of JavaScript? Is JS case sensitive?
18. How to make an Object immutable?
19. How to split a string into an array? How to join an array into a string.
20. How to slice/splice an array.
21. Coding -> Sort an array.
22. How does fetch work.
23. Coding -> Use fetch to get data from the internet and display in the list.
24. Find duplicate values from a string.
25. Dekete an element from an object as well as from an array.
26. What is NaN and what is it's data type?
27. setTimeout / setInterval / clearTimeout / clearInterval
28. DOM / BOM
29. ECMA / ES
30. JSON
31. HTML use custom valudation using Regular Expressions
32. What is a Regular Expression
33. How to reverse an array.