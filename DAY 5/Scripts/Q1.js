var arr =[];
do {
  var num=Number(prompt("Enter Your number"));
  if (num>0) {
 arr.push(num);
  }
  else if (num>0) {
    break;
  }
} while (num>0);

if (arr.length>0) {
  console.log(`The entered nos are ${arr}`);

  let odd = arr.filter(el=> el%3==0);
  console.log(`The odd nos from the entered nos are ${odd}`);

  let cube= odd.map(el=>el**3);
  console.log(`The cube of odd nos are ${cube}`);

}
else {
  console.log(`no numbers entered`);
}
