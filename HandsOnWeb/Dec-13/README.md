Dec-13

Async Programming
setInterval

0. Create a timer app.

1. Questions regarding Object and functions.
2. CSS -> CSSOM, CSS Specificity.
3. Scope (Scope Chaining, Lexical Scope).
3.1 let vs var in a loop.
4. Developer Console.



Q1. What is setTimeout?
-> Adds a delay to the callback function.
-> The callback will be called on or after the delay.
-> The callback will be called when the call stack is finished.


N1. Both setInterval and settimeout returns the ID. (Identifier).

Q.2 What is difference between call and apply?
-> Both are similar, just that apply takes an array whereas call takes comma separated arguments.
-> apply is more dynamic because we can the array dynamically.

Q.3 What is a DOM?
-> It's a global object. (Has a tree like structure)
-> Used to change style, content, children, basically, Manipulation.
-> (D)ocument (O)bject (M)odel
-> Parsing of HTML string into an object.

//BOM -> (B)rowser (O)bject (M)odel
-> Everything that happens in the browser actually happens in the BOM.
BOM is parent of DOM.
window.document = document;


Q.4 CSSOM -> CSS (O)bject (M)odel
-> Object of all the CSS properties and selectors.
-> This is also a tree like structure.

Render Tree -> DOM + CSSOM;


Assignment - Continue on the Timer app and give your own creativity.


Further reading:
- https://www.youtube.com/watch?v=qZ1EFnFOGvE
- https://www.youtube.com/watch?v=iuGPFbLlKYQ


//Shallow Copy
//A copy where two different pointers are pointing to the same memory location.

let obj = {
  'key1': 'Value 1',
  'key2': "Value 2",
};

let new_obj = obj;

new_obj.key3 = "Value 3";

console.log(new_obj);
console.log(obj);

//Deep Copy
//Two different memory locations are used.

let dobj = {
  'key1': "Value 1",
  'key2': "Value 2",
}

let new_dobj = { ...dobj };
let new_dobj1 = JSON.parse(JSON.stringify(dobj));

new_dobj.key3 = "Value 3";

console.log(dobj);
console.log(new_dobj);

-> https://jsonplaceholder.typicode.com/todos/1
-> https://jsonplaceholder.typicode.com/posts
-> let new_arr = [ ...old_arr ];