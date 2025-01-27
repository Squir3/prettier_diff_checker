// Removed line 1: function helloWorld ( ) {
// Removed line 2: console.log( "Hello, World!" )
// Removed line 3: return "done"   ; }
// Added line 1: function helloWorld() {
function helloWorld() {
// Added line 2:   console.log('Hello, World!');
  console.log('Hello, World!');
// Added line 3:   return 'done';
  return 'done';
// Added line 4: }
}

// Removed line 5: const numbers=[1,2,3,4,5 ];
// Removed line 6: numbers.forEach((num)=>{console.log( num );} );
// Added line 6: const numbers = [1, 2, 3, 4, 5];
const numbers = [1, 2, 3, 4, 5];
// Added line 7: numbers.forEach((num) => {
numbers.forEach((num) => {
// Added line 8:   console.log(num);
  console.log(num);
// Added line 9: });
});

// Removed line 8: let x=  10, y =20;
// Removed line 9: if(x>y)
// Removed line 10: { console.log("X is greater");}
// Removed line 11: else 
// Removed line 12: console.log  ("Y is greater");
// Added line 11: let x = 10,
let x = 10,
// Added line 12:   y = 20;
  y = 20;
// Added line 13: if (x > y) {
if (x > y) {
// Added line 14:   console.log('X is greater');
  console.log('X is greater');
// Added line 15: } else console.log('Y is greater');
} else console.log('Y is greater');

// Removed line 14: function add(a,b){
// Removed line 15: return a+b
// Added line 17: function add(a, b) {
function add(a, b) {
// Added line 18:   return a + b;
  return a + b;
}