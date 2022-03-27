"use strict";
//Первая задача:
//Напишите функцию filter()
//Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
   
const allstudents = ['иванов', 'петров', 'сидоров', 'кузнецов', 'смирнов', 'попов', 'соколов'];
const failedstudents = ['иванов', 'сидоров', 'попов'];
const passedstudents = [];

function filter(a, b) {  
  a.forEach(function(item) { 
    if (b.indexOf(item) == -1) { 
      passedstudents.push(item) 
      }
    })
}

filter(allstudents, failedstudents); 
console.log(passedstudents); 