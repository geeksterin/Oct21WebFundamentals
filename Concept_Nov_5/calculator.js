//i += 10; //Same as i = i + 10;
//i *= 20; //Same as i = i * 20;

// document.getElementsByClassName('number_button');
//Assignment, read about dataset.

let result = '';
let operation = '';
let operation_new_number = '';

const number_button_clicked = e => {
    if(operation == '') {
        result += e.target.dataset.number;
        display(result);
    } else {
        operation_new_number += e.target.dataset.number;
        display(operation_new_number);
    }
};

const add_button_clicked = () => {
    operation = '+';
};

const equals_button_clicked = () => {
    operation = '';
    result = Number(result) + Number(operation_new_number);
    operation_new_number = '';
    display(result);
}

const display = (value) => {
    document.getElementById('display').innerText = value;
}



//Attaching event listeners
let add_button = document.getElementById('add_button')
add_button.addEventListener('click', add_button_clicked);

let equals_button = document.getElementById('equals_button');
equals_button.addEventListener('click', equals_button_clicked);

let number_buttons = document.querySelectorAll('.number_button');
number_buttons.forEach(single_number_button => {
    single_number_button.addEventListener('click', number_button_clicked);
});