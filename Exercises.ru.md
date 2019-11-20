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

3. Функция `unique(array)` должна возвращать новый массив, не содержащий
дубликатов. Примеры вызова:

```js
const result = unique([2, 1, 1, 3, 2]);
console.log(result);
// Результат: [2, 1, 3]
```

```js
const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);
// Результат: ['top', 'bottom', 'left']
```

4. Функция `difference(array1, array2)` должна находить разницу между
массивами, т.е. возвращать новый массив, содержащий значения, которые
содержались в `array1`, но не содержались в `array2`. Примеры вызова:

```js
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Результат: [7, -2, 5]
```

```js
const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
const result = difference(array1, array2);
console.log(result);
// Результат: ['Beijing']
```
