const quote = document.getElementById('Quote');
const author = document.getElementById('Author');
const random_btn = document.getElementById('random_btn');
random_btn.addEventListener('click',fetchQuotes);

function fetchQuotes()
{
   fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "quotes15.p.rapidapi.com",
  		"x-rapidapi-key": "1f7fc3f17bmsh0871c6bb6ca477dp1106e9jsn3163e1ce23a7"
  	}
  }).then((resp) => resp.json())
  .then(function(data){
    quote.innerHTML=data.content;
    author.innerHTML=`~ ${data.originator.name}`;
  })

}
