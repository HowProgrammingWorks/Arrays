'use strict';

{
  const array = [];
  array[70] = 100;
  console.dir({ array, length: array.length });
}
{
  const array = [];
  array[1] = 100;
  array['first'] = 300;
  array[0] = 200;
  array[-1] = -100;
  console.dir({ array, length: array.length });
}
{
  const array = [1, 2, 3];
  console.dir({ array, length: array.length });
}
{
  const array = new Array(4);
  console.dir({ array, length: array.length });
}
{
  const array = Array(4);
  console.dir({ array, length: array.length });
}
{
  const array = new Array(7, 6, 5, 4);
  console.dir({ array, length: array.length });
}
{
  const array = Array.from([1, 2, 3]);
  console.dir({ array, length: array.length });
}
{
  const array = Array.from('123');
  console.dir({ array, length: array.length });
}
{
  const array = Array.of(1, 2, 3);
  console.dir({ array, length: array.length });
}
{
  const array = Array.of(4);
  console.dir({ array, length: array.length });
}
{
  const array = new Array(100);
  array.fill(0);
  console.dir({ array, length: array.length });
}
{
  const array = [1, 2, 3];
  array.fill(-1, 1, 3);
  console.dir({ array, length: array.length });
}
