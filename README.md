# IMDB-clone

 HTML Structure: 
  The HTML file provides the structure for the web page. It includes input fields for searching movies, containers for displaying search suggestions, movie cards, and favorite movies.

CSS Styling:
  The CSS file contains styling rules to enhance the visual appearance of the app. This includes layout adjustments, colors, fonts, etc. However, in the provided example, the CSS file is left empty for you to fill with your own styling preferences.

 JavaScript Logic:
        Fetching Movies: The fetchMovies function sends a request to the OMDB API using Axios to search for movies based on the user's input keyword.
        Displaying Suggestions: The addToSuggestionContainerDOM function adds movie suggestions to the suggestion container based on the API response.
        Handling Favorite Button: The handleFavBtn function adds or removes a movie from the favorites list. It updates the DOM accordingly and stores the favorites in the local storage.
        Adding to Favorites DOM: The addToFavDOM function creates a movie card and adds it to the favorites container in the DOM.
        Displaying Favorites: The displayFavorites function updates the favorites container with movie cards retrieved from the local storage.

Event Listeners: Event listeners are added to the search input field to trigger the movie search when the user types in the input field. Additionally, a listener is added to the favorite button on each movie card to handle adding/removing movies from the favorites list.

Initialization: The script initializes by retrieving the list of favorite movies from the local storage and displaying them.

 API Integration: The app integrates with the OMDB API to fetch movie data. It uses Axios, a promise-based HTTP client, to make HTTP requests to the API and retrieve movie information.

Overall, the IMDb clone app provides a user interface for searching and browsing movies, with the ability to add movies to a favorites list. It utilizes HTML, CSS, Bootstrap for styling, JavaScript for interactivity, and the OMDB API for movie data.
