"use strict";
//Четвертая задача:
//для получения средней цены товара
const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];
const resultat = []

function getAveragePriceGoods(a) {
  a.forEach(function(item) {
    resultat.push(Math.round(Math.floor(item[1] / item[0])))
  })
}

getAveragePriceGoods(allСashbox);
console.log(resultat)