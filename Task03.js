"use strict";
//Третья задача:
//Напишите функцию addPrefix  
//Функция получает массив в виде параметров и возвращает массив с префиксами
//После префикса пробел добавляется автоматически  
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const resultat = [];

function addPrefix(a, b) {
  a.forEach(function(item) {
    resultat.push(b+' '+item)
  })
}

addPrefix(names, 'Mr');
console.log(resultat)