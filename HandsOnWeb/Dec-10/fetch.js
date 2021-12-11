// console.log('👋🏻');

let r = fetch('https://reqres.in/api/user');

let s = r.then(function (response) {
    return response.json();
});

s.then(function(a) {
    // console.log(data);
    displayData(a.data);
});


function displayData(data) {
    // console.log(data);
    data.forEach(function(element) {
        console.log(element);
        document.createElement('tr');
        document.createElement('td');
    });
}

// .then(function (response) {
//     console.log(response.json());
// });

// .then(onSuccess, onError);






// fn();

// function fn() {
//     console.log('This is a function');
// }
