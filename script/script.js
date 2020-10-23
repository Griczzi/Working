'use strict';

let money = Number(prompt('Твой месячный доход: ', '1000'));
let income = 200;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.', 'House, cat, food');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let mission = 10000;
let period = 12;
let amount1;
let expenses2;
let amount2;
let budgetDay;
let accumulatedMonth;

let showTypeOf = function(data) {
  console.log(data , typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.length);


if (expenses1 !== null) {
  amount1 = Number(prompt('Во сколько это обойдется?', 200));
}
if (expenses1 !== null) {
  expenses2 = prompt('Если есть еще расходы введите их.');
  amount2 = Number(prompt('Во сколько это обойдется?', 100));
}


let getExpensesMonth = function (a, b) {
  return a + b;
};
console.log(`Расходы за месяц ${getExpensesMonth(amount1, amount2)}`);
console.log(addExpenses.split(','));


const getAccumulatedMonth = function (inc1, inc2, exp1, exp2) {
  accumulatedMonth = (inc1 + inc2) - (exp1 + exp2);
  return console.log(`Доход за месяц равняется: ${accumulatedMonth}`);
}; 
getAccumulatedMonth (money, income, amount1, amount2);

function getTargetMonth (mission, accumulatedMonth) {  // достижение цели
  return (Math.ceil(mission / accumulatedMonth));
}
console.log (`за ${getTargetMonth(mission, accumulatedMonth)} месяцев будет достигнута цель`);

budgetDay = accumulatedMonth / 30; // бюджет на день 
console.log(`Бюджет на день: ${Math.floor(budgetDay)}`);

let getStatusIncome = function() {
  if (budgetDay >= 100) {
  return ('У вас высокий уровень дохода');
  } else if (budgetDay > 50 && budgetDay < 1200) {
  return ('У вас средний уровень дохода');
  } else if (budgetDay <= 20 && budgetDay >= 0) {
  return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay < 0) {
  return ('Что то пошло не так');
  }
};
console.log(getStatusIncome());
