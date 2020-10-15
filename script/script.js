let money = 330;
let income = 200;
let addExpenses = "Такси: 20, Комуналка: 80, Бар: 10";
let deposit = true;
let mission = 10000;
let period = 12;
let budgetDay = money / 20;
let x;

console.log(typeof (deposit));
console.log(typeof (income));
console.log(typeof (money));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');
console.log(addExpenses.toUpperCase());
console.log(addExpenses.split(''));
console.log('budgetDay: ', budgetDay);



// - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
// - Вывести в консоль budgetDay