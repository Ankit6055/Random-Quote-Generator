# Random Quote Generator

A simple web application that fetches random quotes from an API and displays them with beautiful, randomly selected background images. Users can copy the quote to their clipboard, share it on Twitter, and download the background image.

## Features

-   **Fetch Random Quotes**: Retrieves quotes from an external API and displays them on the page.
-   **Random Background Images**: Sets a new, random background image from a curated list with each quote.
-   **Copy to Clipboard**: Copies the displayed quote and author to the clipboard.
-   **Share on Twitter**: Opens a new window with a pre-filled tweet containing the quote.
-   **Download Background Image**: Downloads the current background image as a JPG file.
-   **Loading Indicator**: Shows a loading spinner while fetching quotes.
-   **Notification System**: Provides user feedback through on-screen notifications.
-   **Error Handling**: Gracefully handles API request failures and displays error messages.

## Screenshot

### Main Interface
![Main Interface](./Assests/img.png)

## Deployment

The application is live at:
[Deployment Link](https://random-quote-generator-theta-red.vercel.app/)

## How to Run Locally

1.  Clone the repository:

    ```sh
    git clone [https://github.com/Ankit6055/Random-Quote-Generator.git](https://github.com/Ankit6055/Random-Quote-Generator.git)
    ```

2.  Navigate to the project folder:

    ```sh
    cd Random-Quote-Generator
    ```

3.  Open `index.html` in a web browser.

## Technologies Used

-   HTML - Structure of the web page.
-   CSS - Styling and responsiveness.
-   JavaScript - Fetch API, DOM Manipulation, event handling, clipboard access.

## API Used

This project fetches data from the following API:

-   [Free API - Random Quotes](https://freeapi.hashnode.space/api-guide/apireference/getARandomQuote)

## Background Images

The application uses a curated list of images from Unsplash.