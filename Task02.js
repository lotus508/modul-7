"use strict";
//Вторая задача:
//Напишите функцию getAverageValue 
//для получения среднеарифметического значения
//с округлением в меньшую сторону до целого числа
//С помощью этой функции получите средний чек за день, 
//в массиве данные всех чеков за день:   
var allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

function getAverageValue(array) {
  var sum = 0;
    for(var i = 0; i < array.length; i++) {
     sum += array[i];
    }
  console.log('средний чек за день: ' + Math.round(Math.floor(sum / array.length)));
}

getAverageValue(allСashbox);