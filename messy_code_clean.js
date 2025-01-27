function calculateValues(x, y) {
  let result = 0;
  for (let i = 0; i < x; i++) {
    result += y * 2;
  }
  return result;
}

const myArray = ['hello', 'world', 'test'];

myArray.forEach((item) => {
  console.log(item);
});

let obj = {
  name: 'John',
  age: 30,
  isActive: true,
};

if (obj.age > 20) {
  console.log('Adult');
} else {
  console.log('Minor');
}

function processData(data) {
  let processed = data.map((item) => {
    return item * 2;
  });
  return processed;
}

const result = processData([1, 2, 3, 4, 5]);
console.log(result);
