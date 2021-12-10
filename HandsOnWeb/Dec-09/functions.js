// alert('👋🏻');

// What is a function?
// A function is a set of instructions combined together.
// A function is a example of block of code.
// It gives reusability.
// It is a functionality.
// A piece of code which perfoms a specific functionality / specific task.


// A Sum of two numbers:

//Function Definition / Function Declaration
// function sum(x, y) {
//     return x + y;
// }


// //This is NOT an invocation
// let a = sum;
// console.log(a);


// //Function invocation
// let b = sum(10, 20);
// console.log(b);

// let c = sum(15, 45);
// console.log(c);


// function outer(SECRET_KEY) {
//     // var SECRET_KEY = "10";
//     // console.log(a);
//     function inner1(abcd) {
//         console.log("Function call from inner function");
//         console.log(abcd);
//         console.log(SECRET_KEY);
//     }
//     // console.log(abcd);
//     return inner1;

//     // function inner2() {

//     // }

//     // inner1();
// }

// let x = outer("This is secret passed during initialization");
// x("sasdsfs");
// // console.log(x);

// outer();

// inner1();

// outer();













// function outer(a) {
//     function inner(b) {

//         console.log(a);
//         console.log(b);

//     }
//     return inner;
// }

// let x = outer("Outer Argument");
// x("Inner Argument");



// function outer(a) {

//     //Level 1
//     // function inner(b) {

//     //     console.log(a + b);

//     // }
//     // return inner;

//     //Level 2
//     // return function inner(b) {

//     //     console.log(a + b);

//     // }

//     //Level 3 -> Anonymous function
//     return function (b) {
//         console.log(a + b);
//     }
// }

// // let x = outer(10);
// // x(20);

// outer(10)(20);





function sum(a) {
    return function (b) {
        console.log(a + b);
    }
}


sum(10)(20);


//Write a function to take the input from the 3 input HTML fields.
//Also have a button, clicking on which will display the result.
//Underlying concept should be like this. 👇🏻
// mul(2)(3)(5);