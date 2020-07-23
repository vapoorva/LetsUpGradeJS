let number = Number(prompt('Enter Number'));

  for(let i=2;i<=number;i++)
  {
    let flag=1;
    for(let j=2;j<=i/2;++j)
    {
      if (i % j == 0)
      {
            flag = 0;
            break;
      }
    }
    if (flag == 1)
     console.log(i);
  }
