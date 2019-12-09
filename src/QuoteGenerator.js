import React from 'react'
import quotes from './data/quotes'

export default function QuoteGenerator() {

    function generateQuote () {
        const  randomIndex = Math.floor(Math.random()*quotes.length);
        const quote = quotes[randomIndex];
        return quote
    }

    return (
        <div>
            <Quote quote={generateQuote()} />
        </div>
    )
}

function Quote( { quote } ) {
    return (
        <div>
            {quote.quote} - {quote.author}
        </div>
    )
}
