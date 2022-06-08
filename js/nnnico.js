const quotes = [
  {
    quotes: "rmaksgkrhtlvek",
    author: "rladsmql",
  },
  {
    quotes: "woaldjqtrhwhffu",
    author: "rladsmql",
  },
  {
    quotes: "dlwpdirthrgkaqnfhdkswkqdk",
    author: "rladsmql",
  },
  {
    quotes: "djswpekgo",
    author: "rladsmql",
  },
  {
    quotes: "whfflrhvlrhsgkrhwoaldjqtrh",
    author: "rladsmql",
  },
  {
    quotes: "sorkdlrjfmfgkftndlTdmfRk",
    author: "rladsmql",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
