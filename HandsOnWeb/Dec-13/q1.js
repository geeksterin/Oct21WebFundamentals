// console.log('👋🏻');

//Question 1
// var car = { 
//     registrationNumber: "GA12345",
//     brand: "Toyota",

//     displayDetails: function(){
//         console.log(this.registrationNumber + " " + this.brand);
//     }
// }

// car.displayDetails();

// //GA12345 Toyota


//Question 2
// var car = {
//     displayDetails: function(){
//         console.log(this.registrationNumber + " " + this.brand);
//     }
// }

// car.displayDetails();
//undefined undefined


//Question 3
// var func = function() {
//     console.log(this)
// }.bind(1);

// func();
// //Number { 1 }


// //Question 4
// function checkFun(a, b, c){
//     console.log(this);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// checkFun.call("a",2,3,4);
// checkFun.apply("a", [2, 3, 4]);
// //String { "a" }
// //2
// //3
// //4


document.getElementById('clickMe').addEventListener('click', function() {
    window.location.href = "https://www.google.com";
});