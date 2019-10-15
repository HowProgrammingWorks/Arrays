'use strict';

{
  const array1 = [1, 2, 3, 4];
  const array2 = array1.slice(2);
  console.dir({ array1, array2 });
}
{
  const array1 = [1, 2, 3, 4];
  const array2 = array1.slice(2, 3);
  console.dir({ array1, array2 });
}
{
  const array1 = [1, 2, 3, 4];
  const array2 = array1.slice(-2);
  console.dir({ array1, array2 });
}
