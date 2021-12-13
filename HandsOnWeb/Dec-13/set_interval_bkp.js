// console.log('👋🏻');

//1. Is this an anon function?
//YES

let counter = 0;

let cb = function() {
    // counter = counter + 1;
    // counter += 1;
    counter++;
    document.getElementById('timer_op').innerText = counter;
}

// 6 min and 8 sec

// ((6 * 60) + 8) * 1000

// let id_1 = setTimeout(cb, 10000);
// console.log(id_1);
// clearTimeout(id_1);

let id_2 = setInterval(cb, 1000);

let btn = document.getElementById('stop_timer');
btn.addEventListener('click', function() {
    clearInterval(id_2);
});

let btn_2 = document.getElementById('resume_timer');
btn_2.addEventListener('click', function() {
    id_2 = setInterval(cb, 1000);
})