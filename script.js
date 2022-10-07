"use strict";

//alert('Вы сейчас уйдете со страницы вы уверены?');

// const result = confirm('Вы сейчас здесь находитесь?');

// console.log(result);

// const answer = +prompt('Вам сколько лет?', '33');

// console.log(answer+5);

const answers = [];

answers[0] = prompt('Как ваше имя?');
answers[1] = prompt('Как ваше фамилия?');
answers[2] = prompt('Сколько вам лет?');

document.write(answers);

console.log(typeof(null));
console.log(typeof(answers));