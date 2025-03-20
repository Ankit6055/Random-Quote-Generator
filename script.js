const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const newQuoteBtn = document.getElementById("new-quote");
const copyQuoteBtn = document.getElementById("copy-quote");
const shareTwitterBtn = document.getElementById("share-twitter");
const exportQuoteBtn = document.getElementById("export-quote");
const loadingSpinner = document.getElementById("loading");
const notification = document.getElementById("notification");
const backgroundElement = document.querySelector(".background");

// Background themes
const unsplashBackgrounds = [
  "https://plus.unsplash.com/premium_photo-1687067885966-d755107af021?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://plus.unsplash.com/premium_photo-1674489620667-eaf4a0094996?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://images.unsplash.com/photo-1521833965051-8273d0579115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://images.unsplash.com/photo-1531323386183-43890b5c766d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://plus.unsplash.com/premium_photo-1669050702607-9e51723795f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://plus.unsplash.com/premium_photo-1681426618547-4158e5d6dcd7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://plus.unsplash.com/premium_photo-1694743671394-60034a1b2f65?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://images.unsplash.com/photo-1505027492977-1037f14c46fa?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://plus.unsplash.com/premium_photo-1661947373467-d894f7661a39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

// Function to set a random background
function setRandomBackground() {
  const randomImage = unsplashBackgrounds[Math.floor(Math.random() * unsplashBackgrounds.length)];
  document.querySelector(".background").style.backgroundImage = `url('${randomImage}')`;
  console.log("Background updated:", randomImage);
}

// Function to show notification
function showNotification(message) {
  notification.textContent = message;
  notification.classList.add("active");
  setTimeout(() => {
    notification.classList.remove("active");
  }, 3000);
}

// Function to fetch a random quote
async function getRandomQuote() {
  loadingSpinner.classList.add("active");

  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }

    const data = await response.json();

    quoteText.textContent = data.data.content;
    quoteAuthor.textContent = `— ${data.data.author}`;

    // Set a new background with each quote
    setRandomBackground();
  } catch (error) {
    quoteText.textContent =
      "An error occurred while fetching the quote. Please try again.";
    quoteAuthor.textContent = "";
    console.error("Error fetching quote:", error);
  } finally {
    loadingSpinner.classList.remove("active");
  }
}

// Function to copy quote to clipboard
function copyToClipboard() {
  const textToCopy = `"${quoteText.textContent}" ${quoteAuthor.textContent}`;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      showNotification("Quote copied to clipboard!");
    })
    .catch(() => {
      showNotification("Failed to copy. Please try again.");
    });
}

// Function to share on Twitter
function shareOnTwitter() {
  const text = encodeURIComponent(
    `"${quoteText.textContent}" ${quoteAuthor.textContent}`
  );
  const twitterUrl = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(twitterUrl, "_blank");
}

// Function to export quote as image
async function exportQuoteImage() {
  const backgroundElement = document.querySelector(".background");
    const backgroundImage = backgroundElement.style.backgroundImage;

    if (!backgroundImage) {
        alert("No background image found!");
        return;
    }

    // Extract the URL from `background-image: url("...")`
    const imageUrl = backgroundImage.replace(/url\(["']?(.*?)["']?\)/, '$1');

    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob(); // Convert image to Blob format
        const blobUrl = URL.createObjectURL(blob); // Create a downloadable URL

        // Create an anchor tag to trigger download
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "quote-background.jpg"; // Set the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Cleanup
        URL.revokeObjectURL(blobUrl);
        console.log("Background image downloaded successfully!");
    } catch (error) {
        console.error("Error downloading the image:", error);
        alert("Failed to download image!");
    }
}

// Event listeners
newQuoteBtn.addEventListener("click", getRandomQuote);
copyQuoteBtn.addEventListener("click", copyToClipboard);
shareTwitterBtn.addEventListener("click", shareOnTwitter);
exportQuoteBtn.addEventListener("click", exportQuoteImage);

// Initial quote load
document.addEventListener("DOMContentLoaded", () => {
  setRandomBackground();
  getRandomQuote();
});