// console.log('👋🏻');


//Start execution the network call and return a promise.
let a = fetch('https://jsonplaceholder.typicode.com/todos/1');

//When the Promise object is fullfilled (completed successfully)
//THEN we will call the callback function.
//In the callback function, we are taking the JSON and returning that.
//This retruns a promise.
let b = a.then(function(response) {
    return response.json();
});

b.then(function(data) {
    // console.log(data);
    fn(data);
});


//This function will display (in the HTML) the data.
function fn(data) {
    let h2 = document.createElement('h2');
    h2.innerText = `UserID: ${data.id}`;
    let h3 = document.createElement('h3');
    h3.innerText = `Title: ${data.title}`;


    let div = document.getElementById('response_div');
    div.appendChild(h2);
    div.appendChild(h3);
    // div.appendChild("Simple String"); -> This does not work!
    console.log(data);
}


//Once we enter into the promise universe, we cannot go back to the main call stack!
//We only have an option to call a non promise function.
//From that function also we can only call other functions.
// console.log(b);