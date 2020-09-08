const calculator = (a, b, op) =>{
  switch(op){
    case '+': return a + b;
      				break;
    case '-': return a - b;
      				break;
    case '*': return a * b;
      				break;
    case '/': return a / b;
      				break;
  }
}

let a = 1;
let b = 3;
let op = '/';
console.log(calculator(a, b, op));
