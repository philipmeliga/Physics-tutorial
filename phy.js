const hamburger = {
    init: function () {
        
const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");
const overlay = document.getElementById("overlay");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navList.classList.remove("active");
  overlay.classList.remove("active");
});

 }
 };
 
 const searchTopics = {
     init: function () {
        
const mathTopics = [
  "Algebra",
  "Elementry Mathematics",
  "Calculus I",
  "Calculus II",
  "Statistics",
  "Calculus III",
  "Linear Algebra",
  "Differential Equations",
  "Topology", 
  "Discrete Mathematics", 
  "Functional Analysis", 
  "Real Analysis", 
  "Complex Analysis",
  "Lebesgue Measure", 
  "Biomathematics", 
  "Asymptotic Method", 
  "Machine Learning",
  "Numerical Analysis", 
  "Operation Research", 
  "Abstract Algebra", 
  "Vector Analysis",
  
  
];

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchSuggestions = document.getElementById("search-suggestions");

searchInput.addEventListener("input", () => {
  const searchQuery = searchInput.value.toLowerCase();
  if (searchQuery.length > 0) {
    const filteredTopics = mathTopics.filter(topic => topic.toLowerCase().includes(searchQuery));
    displaySearchResults(filteredTopics);
  } else {
    searchSuggestions.innerHTML = "";
  }
});

function displaySearchResults(topics) {
  searchSuggestions.innerHTML = "";
  topics.forEach(topic => {
    const suggestion = document.createElement("div");
    suggestion.textContent = topic;
    suggestion.addEventListener("click", () => {
      searchInput.value = topic;
      searchSuggestions.innerHTML = "";
      
      // You can add more functionality here, such as navigating to the topic page
    });
    document.getElementById("search-button").addEventListener("click", function () {
        const searchTerm = document.getElementById("search-input").value;
        window.location.href="/philipmeliga.github.io/Math-tutorial/?q=${searchTerm}";
    });
    searchSuggestions.appendChild(suggestion);
  });
}

searchButton.addEventListener("click", () => {
  const searchQuery = searchInput.value.toLowerCase();
  const filteredTopics = mathTopics.filter(topic => topic.toLowerCase().includes(searchQuery));
  if (filteredTopics.length > 0) {
    // You can add more functionality here, such as navigating to the topic page
    console.log(`Searching for ${searchQuery}...`);
  } else {
    console.log(`No results found for ${searchQuery}.`);
  }
});
 }
 };
 
 document.addEventListener("DOMContentLoaded", function () {
     hamburger.init();
     searchTopics.init();
 });
