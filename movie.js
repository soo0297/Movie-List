// TMDB API 테스트
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODljZjc5NmRmN2RiYWM3ZjMzZTBhOGFlZTY1NWMwZiIsIm5iZiI6MTcyMjE4MzQxNS40Njc1NDksInN1YiI6IjY2YTIyMTk0YjFmNTFkYjI5NTcwODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8UnPbQvFnoTNcxBKbMB7yFW4mdW6ghH7mOXrSfUtkP4'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));



const API_KEY = 'd89cf796df7dbac7f33e0a8aee655c0f';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;


// Fetch로 API 데이터 가져오기
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        const movieContainer = document.getElementById('movie-container');
        movies.forEach(movie => {
            const card = createMovieCard(movie);
            movieContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error:', error));

// 카드생성
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <h3>${movie.title}</h3>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <p>${movie.overview}</p>
        <span>평점: ${movie.vote_average}</span>
    `;
    card.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));
    return card;
};

// 카드제목 검색 기능
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});