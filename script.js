document.addEventListener("DOMContentLoaded", function() {
    var newsList = document.getElementById("newsList");

    // Sample news data
    var newsData = [
        { title: "Important Announcement", content: "Welcome to our family website." },
        { title: "Site Purpose",content:"This site for convey the information from one place to another"}
    ];

    // Display news items
    newsData.forEach(function(news) {
        var newsItem = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.content}</p>
                </div>
            </div>
        `;
        newsList.innerHTML += newsItem;
    });
});

// Array of quotes
const quotes = [
    "Home is where love resides, memories are created, friends always belong, and laughter never ends.",
    "A house is made of bricks and beams. A home is made of hopes and dreams.",
    "Home is not a place; it's a feeling.",
    "There's no place like home.",
    "Home is where our story begins.",
    "In this loving home, we laugh, we share, we care, and we grow.",
    "Home is the starting place of love, hope, and dreams.",
    "A home is a haven for love, memories, and happiness.",
    "Home is where the heart is.",
    "The magic thing about home is that it feels good to leave, and it feels even better to come back."
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}

// Display a random quote when the page loads
displayRandomQuote();


    // Smooth scrolling for navigation links
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('a.nav-link');
        
        for (const link of navLinks) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                
                const target = document.querySelector(link.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        }
    });
