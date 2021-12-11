// console.log('👋🏻');

//document.getElementById();
//document.querySelector();
//document.querySelectorAll();

//Select first element with ID abcd.
let r = document.getElementById("abcd");
// r.style.color = "red";
console.log(r);

//Select first element with ID abcd
let s = document.querySelector("#abcd");
console.log(s);

//Select the first element with class aaaa
let t = document.querySelector(".aaaa");
console.log(t);

//Select the first span tag.
let u = document.querySelector("span");
console.log(u);

//Select all span tags
let v = document.querySelectorAll('span');
console.log(v);

//You can combine multiple selectors together.
//Select all span tags which have class aaaa. (AND Condition)
let w = document.querySelectorAll('span.aaaa');
console.log(w);

//Select all elements either an h2 tag OR a span tag. (OR Condition)
let x = document.querySelectorAll("span, h2");
console.log(x);



let y = document.getElementById("a");
console.log(y);


// let z = y.getElementById('b');
// console.log(z);