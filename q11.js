// Using for loop output the array elements in reverse order.

const array = [1, 2, 3, 4, 5];
const array2=[]
for (let i = array.length - 1; i >= 0; i--) {
  array2.push(array[i]);
}
console.log(array2)