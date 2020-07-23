function add (num1,num2)
{
  return (num1+num2);
}

function sub (num1,num2)
{
  return (num1-num2);
}

function mul (num1,num2)
{
  return (num1*num2);
}

function div (num1,num2)
{
  return (num1/num2);
}

function sqrt (num1)
{
  return (Math.sqrt(num1));
}

let num1= Number(prompt("Enter First number",0))
let num2= Number(prompt("Enter Second number",0))

console.log(`Addition of ${num1} and ${num2} is ${add(num1,num2)}`);

console.log(`Subtraction of ${num1} and ${num2} is ${sub(num1,num2)}`);

console.log(`Multiplication of ${num1} and ${num2} is ${add(num1,num2)}`);

console.log(`Division of ${num1} and ${num2} is ${add(num1,num2)}`);

console.log(`Square Root of ${num1} and ${num2} is ${sqrt(num1)} and ${sqrt(num2)} respectively`);
