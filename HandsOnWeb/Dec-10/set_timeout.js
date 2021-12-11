// console.log('👋🏻');


// setTimeout() -> Asynchronous
//Execute the passed callback after the specified delay (time in milliseconds).

function fn() {
    // let a = document.getElementById('heading');
    // a.style.display = 'initial';
    console.log('This is a function');
}

// function fn1() {
//     console.log('This is another timeout');
// }

// setTimeout(fn1, 0);

setTimeout(fn, 0);
fn();
//Please execute this callback (fn) after 0 milliseconds when you have time.
console.log('This is written after the set timeout.');


// 1. This is a function \n This is written after the set timeout.
// 2. This is written after the set timeout. \n This is a function. ✔
// 3. My system will burst into flames
// 4. God knows.