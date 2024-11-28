
const fetchQuote = async() => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/');
    const data = await res.json();

    console.log(data[0].quote);
    return data;

}






export const BreakingbadApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');

    nextQuoteButton.innerText = 'Next Quote';

    

    


    const renderQuote = (data) => {

        quoteLabel.innerHTML = data[0].quote;
        authoLabel.innerHTML = data[0].author;
        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);

    }

    nextQuoteButton.addEventListener('click', () => {
         
        element.innerText = 'Loading...';
        fetchQuote()
            .then(renderQuote);

        

    
    }) 

    fetchQuote()
        .then(renderQuote);

    
    
};