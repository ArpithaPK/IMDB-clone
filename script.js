// JavaScript code goes here

// OMDB API base URL
const OMDB_API_BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = 'fee0c94f'; // replace with your actual API key

// Initialize variables
let suggestionList = [];
let favMovieArray = JSON.parse(localStorage.getItem('favMovies')) || [];
let movieName = '';

// Function to fetch movies based on search input
async function fetchMovies(keyword) {
  const response = await axios.get(`${OMDB_API_BASE_URL}?apikey=${API_KEY}&s=${keyword}`);
  return response.data.Search;
}

// Function to add suggestions to the suggestion container
function addToSuggestionContainerDOM(suggestions) {
  const suggestionContainer = document.getElementById('suggestionContainer');
  suggestionContainer.innerHTML = '';
  suggestions.forEach((movie) => {
    const suggestion = document.createElement('div');
    suggestion.textContent = movie.Title;
    suggestion.classList.add('suggestion');
    suggestion.addEventListener('click', () => {
      movieName = movie.Title;
      displayMovieInfo(movie.imdbID);
      suggestionContainer.innerHTML = '';
    });
    suggestionContainer.appendChild(suggestion);
  });
}

// Function to handle favorite button click
function handleFavBtn(movie) {
  const index = favMovieArray.findIndex((favMovie) => favMovie.imdbID === movie.imdbID);
  if (index === -1) {
    addToFavDOM(movie);
    favMovieArray.push(movie);
  } else {
    deleteMovie(index);
  }
  localStorage.setItem('favMovies', JSON.stringify(favMovieArray));
}

// Function to add movie to favorites DOM
function addToFavDOM(movie) {
  const favoritesContainer = document.getElementById('favoritesContainer');
  const movieCard = createMovieCard(movie);
  movieCard.classList.add('favorite');
  favoritesContainer.appendChild(movieCard);
}

// Function to delete movie from favorites
function deleteMovie(index) {
  favMovieArray.splice(index, 1);
  localStorage.setItem('favMovies', JSON.stringify(favMovieArray));
  displayFavorites();
}

// Function to display movie information
async function displayMovieInfo(movieId) {
  const response = await axios.get(`${OMDB_API_BASE_URL}?apikey=${API_KEY}&i=${movieId}`);
  const movie = response.data;
  const movieCard = createMovieCard(movie);
  const moviesContainer = document.getElementById('moviesContainer');
  moviesContainer.innerHTML = '';
  moviesContainer.appendChild(movieCard);
}

// Function to create movie card
function createMovieCard(movie) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
    <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Plot}</p>
      <button class="btn btn-primary" id="favBtn">Add to Favorites</button>
    </div>
  `;
  const favBtn = card.querySelector('#favBtn');
  favBtn.addEventListener('click', () => handleFavBtn(movie));
  return card;
}

// Function to display favorites
function displayFavorites() {
  const favoritesContainer = document.getElementById('favoritesContainer');
  favoritesContainer.innerHTML = '';
  favMovieArray.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    movieCard.classList.add('favorite');
    favoritesContainer.appendChild(movieCard);
  });
}

// Event listener for search input
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', async () => {
  const keyword = searchInput.value;
  if (keyword.trim() !== '') {
    suggestionList = await fetchMovies(keyword);
    addToSuggestionContainerDOM(suggestionList);
  }
});

// Initial display of favorites
displayFavorites();
