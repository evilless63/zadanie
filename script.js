'use strict';

let money = prompt('Ваш бюджет на месяц ?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let statya1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let cost1 = prompt('Во сколько обойдется?', '');

let statya2 = prompt('Введите обязательную статью расходов в этом месяце', '');
let cost2 = prompt('Во сколько обойдется?', '');

let appData = {
    'money': money,
    'timData': time,
    'expenses': {
        cost1 : cost2,
    },
    'optionalExpenses': {

    },
    'income': [],
    'savings': false
};

alert(money / 30);
