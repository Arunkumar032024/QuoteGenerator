const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("#quote-btn"),
authorName = document.querySelector(".author"),
speakBtn = document.querySelector(".speak"),
copyBtn = document.querySelector(".copy"),
xBtn = document.querySelector(".x"),
quoteUrl = "https://api.quotable.io/random";

// create random quote function 
async function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    // fetching random quote/data from the API and pursing it into quote.
    let response = await fetch(quoteUrl);
    let result = await response.json();
    console.log(result);
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
}

speakBtn.addEventListener("click", ()=> {
    // the SpeechSynthesisUtterance is a web speech api that represents a speech result. 
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); // speak method of the speechSynthesis
});

copyBtn.addEventListener("click", ()=> {
    // copying the quote text on copyBtn click 
    // writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
});

xBtn.addEventListener("click", ()=> {
    let xUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(xUrl, "_blank"); // opening a new twitter tab window
});

quoteBtn.addEventListener("click", randomQuote);