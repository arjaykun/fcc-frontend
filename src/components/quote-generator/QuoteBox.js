import React, {useEffect, useState} from 'react';
import './QuoteBox.css';

const QuoteBox = () => {
	const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
	const [quotes, setQuotes] = useState([]);
	const [quote, setQuote] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect( () => {
		if(quotes.length === 0) {	
			requestQuotes();
		} else {
			fetchQuote(); 
		}

		// eslint-disable-next-line
	}, [quotes])

	const requestQuotes = async () => {
		setLoading(true)
		const response = await fetch(url).catch( err =>console.log(err));
		const data = await response.json();
		setQuotes(data.quotes);
		setLoading(false)
	}

	const fetchQuote = () => {
		const count = quotes.length
		const random = Math.floor(Math.random() * count) //0 to (count - 1)

		setQuote(quotes[random])
	}

  return (
  	<div id="wrapper">
	    { 
	    	loading? 'loading' :

		    <div id="quote-box">
		      <h1 id="text">{ quote.quote }</h1>
		      <p id="author">~ { quote.author }</p>


		      <div id="quote-options">
			      <a 
			      	href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote.quote}-${quote.author}"`} 
			      	id="tweet-quote"
			      	target="_blank"
			      	rel="noopener noreferrer"
			      	disabled={loading}
			      >
			      	Tweet
			      </a>
			      <button 
			      	id="new-quote" 
			      	onClick={fetchQuote}
			      	disabled={loading}
			      	>
			      		New Quote
			      	</button>
		      </div> 

		    </div>
	    }
    </div>
  );
}


export default QuoteBox