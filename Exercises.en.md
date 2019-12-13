## Working with Array methods

1. Implement function `removeElement(array, item)` to delete element `item`
from `array`. Example:

```js
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Result: [1, 2, 3, 4, 6, 7]
```
or
```js
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima'); // remove 'Lima' from array
removeElement(array, 'Berlin'); // do nothing
console.log(array);
// Result: ['Kiev', 'Beijing', 'Saratov']
```

2. Improve previous task function for removing multiple elements from
array `removeElements(array, item1, ... itemN)`. Example:

```js
const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);
// Result: [2, 3, 4, 7]
```
or
```js
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);
// Result: ['Beijing', 'Saratov']
```

3. Function `unique(array)` should return new array, not containing
duplicates. Call example:

```js
const result = unique([2, 1, 1, 3, 2]);
console.log(result);
// Result: [2, 1, 3]
```

```js
const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);
// Result: ['top', 'bottom', 'left']
```

4. Function `difference(array1, array2)` should find difference between
array and return new array containing elements from `array1` but not
containing in `array2`. Call example:

```js
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Result: [7, -2, 5]
```

```js
const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
const result = difference(array1, array2);
console.log(result);
// Result: ['Beijing']
```
