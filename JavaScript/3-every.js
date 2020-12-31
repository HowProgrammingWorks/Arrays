'use strict';

{
  const array = [1, 2, 3];
  console.log(array.every((x) => x > 0));
}
{
  const array = ['a', 'b', 'c'];
  console.log(array.every((c) => c > 'a'));
}
{
  const array = ['a', 'b', 'c'];
  console.log(array.some((c) => c > 'a'));
}
