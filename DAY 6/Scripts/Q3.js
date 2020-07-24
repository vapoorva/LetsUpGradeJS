var name= prompt("Enter Your name","Anonymous");
document.getElementById("name").innerHTML=`Welcome ${name}`;
const attr = document.getElementById("body");
attr.classList.add('black');

const ctime = document.getElementById("clock");

function Time()
{
  let date = new Date();
  let time = date.toLocaleTimeString();
  ctime.innerText = time;
}
setInterval(Time,1000);
