function helloWorld() {
  console.log('Hello, World!');
  return 'done';
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num);
});

let x = 10,
  y = 20;
if (x > y) {
  console.log('X is greater');
} else console.log('Y is greater');

function add(a, b) {
  return a + b;
}
