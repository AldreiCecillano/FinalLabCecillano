GIPHY Search Application
A simple web application that allows users to search for GIFs using the GIPHY API. The application features a responsive design built with HTML, CSS, JavaScript, and Bootstrap.

Clone the repository:

git clone <repository-url>
cd giphy-search-app

Open the HTML file:

1. Open index.html in your preferred web browser.
2. Edit the API Key:
3. Open script.js in a code editor.
4. Replace YOUR_GIPHY_API_KEY with your actual GIPHY API key.

To obtain a GIPHY API key, follow these steps:

1. Go to the GIPHY Developers website.
2. Sign up for an account or log in if you already have one.
3. Navigate to the Create an App section in your dashboard.
4. Fill in the required fields and agree to the terms.
5. After creating the app, you will receive your API key.
6. Copy the API key and paste it into the script.js file where indicated.

The GIPHY API has rate limits. If you make too many requests in a short period, you may receive errors. This application does not handle rate limit errors gracefully.
The search results are limited to 12 GIFs per request. Pagination is not implemented.
The application does not currently handle cases where the search input is empty.

*The user has basic knowledge of how to run a web application in a browser.
*Users will have internet access to fetch data from the GIPHY API.
*The application is meant for educational purposes and may not cover all edge cases.

1. Enter a search term in the input field.
2. Click the "Search" button to fetch and display GIFs related to the search term.
3. The GIFs will be displayed in a responsive grid layout.
