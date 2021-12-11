// console.log('👋🏻');

//We can use async keyword without using await keyword;
//We CANNOT use await keyword without async keyword;
//We CANNOT use await in the main thread.

//Use -> Makes your code look better. Makes it look synchronous
//Easy to read and understand.


//Async keyword you use to tell that a function is an asynchronous function.
//That means, it will return a promise.

//Await keyword you use to wait for the execution to complete.
//That means, WAIT till the promise is resolved.


// async function fn() {
//     console.log('This is an async function');
// }

// fn();


// fetch().then(function() {
//     console.log("This is a success callback");
// }, function() {
//     console.log("This is an error callback");
// }).then(function() {
//     console.log("This is second function call");
// })


async function fn () {
    try {
        let r = await fetch('https://reqres.in/api/user');
        let s = await r.json();
        console.log(r);
    } catch(e) {
        console.log(e);
    }
}

fn();


// let xhr = new XMLHttpRequest();
// xhr.addEventListener('load', function(response) {
//     console.log(response);
// });
// xhr.open('GET', "https://reqres.in/api/user");
// xhr.send();