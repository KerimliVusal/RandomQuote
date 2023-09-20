const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const loading = document.getElementById("loading");
const url = "https://api.quotable.io/random";

const getQuote = async () => {
  try {
    loading.style.display = "block";
    quote.style.display = "none";
    author.style.display = "none";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    quote.innerText = data.content;
    author.innerText = data.author;
  } catch (error) {
    console.error("An error occurred:", error);
  }
  finally {
    loading.style.display = "none"; 
    quote.style.display = "block"; 
    author.style.display = "block";

  }
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);