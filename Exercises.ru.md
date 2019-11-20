## Работа с массивами и использование методов Array

1. Реализуйте функцию `removeElement(array, item)` для удаления элемента `item`
из массива `array`. Например:

```js
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]
```
или
```js
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima'); // удалит 'Lima' из массива
removeElement(array, 'Berlin'); // не удалит ничего
console.log(array);
// Результат: ['Kiev', 'Beijing', 'Saratov']
```

2. Улучшите функцию из предыдущего задания для удаления нескольких элементов из
массива `removeElements(array, item1, ... itemN)`. Например:

```js
const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);
// Результат: [2, 3, 4, 7]
```
или
```js
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);
// Результат: ['Beijing', 'Saratov']
```
