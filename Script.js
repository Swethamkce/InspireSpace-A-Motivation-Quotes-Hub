// Random Quote Generator for Home Page
const quotes = [
  "Believe you can and you're halfway there.",
  "The best way to get started is to quit talking and begin doing.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "It always seems impossible until it’s done.",
  "Success is not in what you have, but who you are."
];

function newQuote() {
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerText = quotes[randomIndex];
}

// Display first quote on page load
if (document.getElementById("quote")) newQuote();

// Contact form validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("formMsg").innerText =
      "✅ Thank you for reaching out! We’ll get back to you soon.";
    form.reset();
  });
}
