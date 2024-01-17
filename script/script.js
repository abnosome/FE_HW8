
const list =[61,26,34,48,58,75,37];

//1. Поиск максимального числа: Условие: Напишите программу, которая находит максимальное число из массива и выводит его.
let max = list[0];
for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
        max = list[i];
    }
}
console.log(max + " - максимальное число в массиве")

//2. Генератор таблицы умножения: Условие: Выведите таблицу умножения для числа 5
let number = 5;
for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} * ${i} = ${result}`); //синтаксис пришлось нагуглить: не самое интуитивное на свете 
}

//3.Подсчет четных чисел: Условие: Напишите программу, которая подсчитывает количество четных чисел в заданном массиве.
const list2 =[61,26,34,48,58,75,37];
let evenCount = 0;

for (let i = 0; i < list2.length; i++) {
    if (list2[i] % 2 === 0) {
        evenCount++;
    }
}
console.log("Count of even numbers " + evenCount);

//4.Реверс массива: Условие: Напишите программу, которая переворачивает заданный массив.
const reversedArray = list2.reverse();
console.log("array " + list2)
console.log("revers " + reversedArray)

