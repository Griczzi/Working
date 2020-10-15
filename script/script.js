'use strict';

let money = Number(prompt('Твой месячный доход: '));
let income = 200;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1;
let expenses2;
let amount2;
let mission = 10000;
let period = 12;
let budgetDay;
let budgetMonth;

if (expenses1 !== null) {
  amount1 = Number(prompt('Во сколько это обойдется?'));
}
if (expenses1 !== null) {
  expenses2 = prompt('Если есть еще расходы введите их.');
  amount2 = Number(prompt('Во сколько это обойдется?'));
}

budgetDay = ((money + income) - (amount1 + amount2)) / 30;
budgetMonth = ((money + income) - (amount1 + amount2));


if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay <= 600 && budgetDay >= 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
  console.log('Что то пошло не так');
}

console.log(typeof (income));
console.log(typeof (money));
console.log(typeof (deposit));
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} долларов`);
console.log(addExpenses.split(','));
console.log(`Бюджет на месяц: ${budgetMonth}`);
console.log(`за ${Math.ceil(mission / budgetMonth)} месяцев будет достигнута цель`);
console.log(`Бюджет на день: ${Math.floor(budgetDay)}`);
