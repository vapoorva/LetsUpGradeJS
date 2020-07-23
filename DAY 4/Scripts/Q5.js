let sales =Number(prompt('Enter the Number of Sales you did??',0));

if (sales>=0 && sales<=5000) {
console.log('Your commision is 2%');
}

else if (sales>5000 && sales<=1000) {
console.log('Your commision is 5%');
}

else if (sales>10000 && sales<=20000) {
  console.log('Your commision is 7%');

}

else if (sales>20000 ) {
  console.log('Your commision is 10%');

}

else {
  console.log('Invalid Input');
}
