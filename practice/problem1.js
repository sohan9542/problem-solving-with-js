// Write a javascript programme to check two numbers and return true if 
// one of the number is 100 of if the sum of the two numbers is 100


const isEqual100 = (a, b) => {return a === 100 || b === 100 || (a + b) === 100}

console.log(isEqual100(100,0));
console.log(isEqual100(0,100));

console.log(isEqual100(0,10));
console.log(isEqual100(0,10));

console.log(isEqual100(10,90));
console.log(isEqual100(50,50));



