'use strict';

{
  const array1 = [1, 2, 3, 4];
  const array2 = array1.splice(2);
  console.dir({ array1, array2 });
}
{
  const array1 = [1, 2, 3, 4];
  const array2 = array1.splice(2, 1);
  console.dir({ array1, array2 });
}
{
  const array1 = [1, 2, 3, 4];
  const array2 = array1.splice(2, 1, 0, 0);
  console.dir({ array1, array2 });
}
