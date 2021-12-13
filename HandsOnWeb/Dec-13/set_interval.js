// console.log('👋🏻');

let counter = 0;
let setInterval_id = null;

let timer_callback = function() {
    counter++;
    document.getElementById('timer_op').innerText = counter;
}

let pause_timer_btn = document.getElementById('pause_timer');
pause_timer_btn.addEventListener('click', function() {
    clearInterval(setInterval_id);
});

let resume_timer_btn = document.getElementById('resume_timer');
resume_timer_btn.addEventListener('click', function() {
    setInterval_id = setInterval(timer_callback, 1000);
    this.innerText = "Resume";
});

let reset_timer_btn = document.getElementById('reset_timer');
reset_timer_btn.addEventListener('click', function() {
    clearInterval(setInterval_id);
    counter = 0;
    document.getElementById('timer_op').innerText = counter;
});

let restart_timer_btn = document.getElementById('restart_timer');
restart_timer_btn.addEventListener('click', function() {
    counter = 0;
    document.getElementById('timer_op').innerText = counter;
});