'use strict';

{
  const array = [1, 2, 3, 4];
  const sum = (acc, element) => acc + element;
  console.log(array.reduce(sum));
}
{
  const array = [1, 2, 3, 4];
  const sum = (acc, element) => acc + element;
  console.log(array.reduce(sum, 0));
}
{
  const array = [1, 0, 168, 192];
  const sum = (acc, element) => acc + '.' + element;
  console.log(array.reduceRight(sum));
}
