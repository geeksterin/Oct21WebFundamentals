//What is this keyword.

// Default Behaviour ->
//   Context of Execution.
//   Owner Object
//   window object in global context.
//   representing the owner object.
// Customized Behaviour ->
//   Change the pointer of this to point to custom data.
//   This data will be sent using the call/apply/bind methods.
//   First argument will be the this pointer.


//Call and Apply will execute the function.
//In call, you have to pass multiple parameters as a comma separated value. (NOT DYNAMIC)
//In apply, you can pass the parameters as an array. (THIS IS DYNAMIC)
//Bind will just bind the this keyword and return the new function reference.

// let cal = {
//     'num1': 10,
//     'num2': 20,
//     'sum': function() {
//         let add = this.num1 + this.num2;
//         console.log(add);
//     },
//     'showThis': function() {
//         console.log(this);
//     }
// }

// let cal1 = {
//     'num234324': 10,
//     'num223423432423': 20,
//     'sum': function() {
//         let add = this.num1 + this.num2;
//         console.log(add);
//     },
//     'showThis': function() {
//         console.log(this);
//     }
// }



// cal.sum();

// cal.showThis();
// cal1.showThis();
// console.log(this);
// console.log(cal);


// let complex_obj = {
//     'key1': "Value 1",
//     'key2': "Value 2",
//     'compex_key': {
//         'inner_key1': "Inner Value 1",
//         'inner_key2': "Inner Value 2",
//         'inner_fn': function() {
//             console.log(this);
//         }
//     },
//     'outer_fn': function() {
//         console.log(this);
//     }
// }

// complex_obj.compex_key.inner_fn();
// complex_obj.outer_fn();

//1. 1020
//2. Nothing
//3. 30
//4. Window

function fn() {
    console.log(this);
}

var x = document.getElementById('abcd');
x.addEventListener('click', fn);

var x = document.getElementById('abcd1');
x.addEventListener('click', function() {
    console.log("This is an anonymous function");
});

function fn1() {
    console.log(this);
    // this = 1;
}
// fn1();

// fn1();



// let btn_obj = {
//     'id': 'asdasd',
//     'classes': 'kjsdfhjksdhf',
// }

// fn1.call(1235);

let ref = fn1.bind(1234444444);
ref();