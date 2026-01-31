// DOM Elements
const movieGrid = document.getElementById('movieGrid');
const movieDetail = document.getElementById('movieDetail');
const backButton = document.getElementById('backButton');
const videoPlayer = document.getElementById('videoPlayer');
const movieTitle = document.getElementById('movieTitle');
const movieCategory = document.getElementById('movieCategory');
const movieDescription = document.getElementById('movieDescription');
const downloadButton = document.getElementById('downloadButton');

// Current movie being viewed
let currentMovie = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderMovies();
    setupEventListeners();
});

/**
 * Render all movies in the grid
 */
function renderMovies() {
    movieGrid.innerHTML = '';

    movies.forEach((movie, index) => {
        const movieCard = createMovieCard(movie, index);
        movieGrid.appendChild(movieCard);
    });
}

/**
 * Create a movie card element
 */
function createMovieCard(movie, index) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.setAttribute('data-index', index);

    card.innerHTML = `
        <img src="${movie.imagen}" alt="${movie.titulo}" class="movie-poster" loading="lazy">
        <div class="card-content">
            <h3 class="card-title">${movie.titulo}</h3>
            <span class="card-category">${movie.categoria}</span>
        </div>
    `;

    // Add click event to show movie detail
    card.addEventListener('click', () => showMovieDetail(movie));

    return card;
}

/**
 * Show movie detail view with video player
 */
function showMovieDetail(movie) {
    currentMovie = movie;

    // Update movie information
    movieTitle.textContent = movie.titulo;
    movieCategory.textContent = movie.categoria;
    movieDescription.textContent = movie.descripcion || 'No hay descripción disponible.';

    // Convert Google Drive URL to embed format
    let videoUrl = movie.url_video;
    let downloadUrl = movie.url_video;

    // Check if it's a Google Drive URL and convert it
    if (videoUrl.includes('drive.google.com')) {
        // Extract ID from different Google Drive URL formats
        let fileId = null;

        // Format: https://drive.google.com/file/d/ID/view
        if (videoUrl.includes('/file/d/')) {
            fileId = videoUrl.split('/file/d/')[1].split('/')[0];
        }
        // Format: https://drive.google.com/uc?id=ID
        else if (videoUrl.includes('uc?id=')) {
            fileId = videoUrl.split('uc?id=')[1].split('&')[0];
        }
        // Format: https://drive.google.com/open?id=')) {
        else if (videoUrl.includes('open?id=')) {
            fileId = videoUrl.split('open?id=')[1].split('&')[0];
        }

        // Convert to embed URL for iframe
        if (fileId) {
            videoUrl = `https://drive.google.com/file/d/${fileId}/preview`;
            // Download URL format
            downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        }
    }

    videoPlayer.src = videoUrl;

    // Set download button
    downloadButton.href = downloadUrl;
    downloadButton.download = `${movie.titulo}.mp4`;

    // Hide grid, show detail
    movieGrid.classList.add('hidden');
    movieDetail.classList.remove('hidden');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Show movie list (hide detail view)
 */
function showMovieList() {
    // Reset iframe
    videoPlayer.src = '';

    // Show grid, hide detail
    movieDetail.classList.add('hidden');
    movieGrid.classList.remove('hidden');

    // Reset current movie
    currentMovie = null;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Back button
    backButton.addEventListener('click', showMovieList);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // ESC key to go back
        if (e.key === 'Escape' && !movieDetail.classList.contains('hidden')) {
            showMovieList();
        }
    });
}

/**
 * Filter movies by category (optional feature for future)
 */
function filterByCategory(category) {
    const filteredMovies = category === 'all'
        ? movies
        : movies.filter(movie => movie.categoria === category);

    movieGrid.innerHTML = '';
    filteredMovies.forEach((movie, index) => {
        const movieCard = createMovieCard(movie, index);
        movieGrid.appendChild(movieCard);
    });
}

/**
 * Search movies by title (optional feature for future)
 */
function searchMovies(query) {
    const searchResults = movies.filter(movie =>
        movie.titulo.toLowerCase().includes(query.toLowerCase())
    );

    movieGrid.innerHTML = '';

    if (searchResults.length === 0) {
        movieGrid.innerHTML = '<p style="color: #B3B3B3; text-align: center; width: 100%;">No se encontraron películas</p>';
        return;
    }

    searchResults.forEach((movie, index) => {
        const movieCard = createMovieCard(movie, index);
        movieGrid.appendChild(movieCard);
    });
}
