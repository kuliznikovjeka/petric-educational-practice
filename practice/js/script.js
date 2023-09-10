'use strict';

const answers = [];
answers[0] = prompt('Как Вас зовут?', '');
answers[1] = prompt('Фамилия?', '');
answers[2] = +prompt('Возраст?', '');

document.write(answers);
console.log(typeof (answers));
console.log(typeof (null));