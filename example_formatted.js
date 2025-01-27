function helloWorld() { // Removed: function helloWorld ( ) {
  console.log('Hello, World!'); // Removed: console.log( "Hello, World!" )
  return 'done'; // Removed: return "done"   ; }
}
const numbers = [1, 2, 3, 4, 5]; // Removed: const numbers=[1,2,3,4,5 ];
numbers.forEach((num) => { // Removed: numbers.forEach((num)=>{console.log( num );} );
  console.log(num);
}); // Removed: let x=  10, y =20;
let x = 10, // Removed: if(x>y)
  y = 20; // Removed: { console.log("X is greater");}
if (x > y) { // Removed: else
  console.log('X is greater'); // Removed: console.log  ("Y is greater");
} else console.log('Y is greater');
function add(a, b) { // Removed: function add(a,b){
  return a + b; // Removed: return a+b
}