'use strict';

{
  const array = [10, [20, 30], 40];
  console.log(array.flat()); // [10, 20, 30, 40]
}
{
  const array = [10, [20, [30]], 40];
  console.log(array.flat()); // [10, 20, [30], 40]
}
{
  const array = [10, [20, [30]], 40];
  console.log(array.flat(2)); // [10, 20, 30, 40]
}
{
  const array = [10, [20, [30, [40]]]];
  console.log(array.flat(Infinity)); // [10, 20, 30, 40]
}
