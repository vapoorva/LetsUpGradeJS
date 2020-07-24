var mul= document.getElementById('multiply')
var num=Number(prompt("Enter the number"));
for(var i=1;i<=10;i++)
{
  console.log(`${num} x ${i} = ${num*i}`);
  mul.innerHTML += `<li>${num} x ${i} = ${num*i}</li>`;
}
