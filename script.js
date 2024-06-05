const input = document.getElementById('cel_far');
const button_1 = document.getElementsByClassName('btn_cel')[0];
const answer_1 = document.getElementsByClassName('ans_1')[0];

button_1.addEventListener('click', function () {
    const answer = input.value * 9 / 5 + 32;
    answer_1.innerText = 'Farenhite value: ' + answer + ' °F';
})
const button_2 = document.getElementsByClassName('btn_kg')[0];
button_2.addEventListener('click', function () {
    const input_2 = document.getElementById('kg_pnds');
    const answer_2 = document.getElementsByClassName('ans_2')[0];
    const answer1 = input_2.value * 2.20462;
    answer_2.innerText = 'Kg in pounds: ' + answer1 + ' lbs';

})

const button_3 = document.getElementsByClassName('btn_ft')[0];
button_3.addEventListener('click', function () {
    const input_3 = document.getElementById('ft_cm');
    const answer_3 = document.getElementsByClassName('ans_3')[0];
    const answer2 = input_3.value * 30.48;
    answer_3.innerText = 'Feet in Centimeters: ' + answer2 + ' cm';
})
