// window.alert('👋🏻');

//let vs const will be same output.
//In let, I can update the value within the same scope level.
//In const, I cannot update the value within the same scope level. BUT BUT BUT, I can create a new child block and have a new constant even with the same name is acceptable.

// const a = "5";
// {
//     const a = "10";
//     {
//         const a = "20";
//         console.log(a);
//     }
//     {
//         const a = "30";
//         {
//             console.log(a);
//         }
//     }
//     console.log(a);
// }
// console.log(a);

//20
//30
//10
//5






// var a = "5";
// {
//     var a = "10";
//     {
//         var a = "20";
//         console.log(a);
//     }
//     {
//         var a = "30";
//         {
//             console.log(a);
//         }
//     }
//     console.log(a);
// }
// console.log(a);

//20
//30
//30
//30




// var a = "10";
// {
//     var a = "20";
//     console.log(a);
// }
// console.log(a);

//20
//20






// var a = "10";
// {
//     let a = "20";
//     {
//         // const a = "30";
//         console.log(a);
//     }
// }
// console.log(a);

//20
//10








// let a = "10";
// {
//     var a = "20";
//     {
//         // const a = "30";
//         console.log(a);
//     }
// }
// console.log(a);
//Error -> Crash



// let a = 10;
// let a = 20;
//Crash

// var a = 10;
// let a = 20;
//Crash

// let a = 10;
// var a = 20;
//Crash
