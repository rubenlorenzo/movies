import {api_key} from './env.js';

const asideGenres = document.querySelector('#genres > nav');

const getGenres = () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=es-ES`)
        .then(res => res.json())
        .then(res => {
            const genres = res.genres;
            
            genres.forEach(genre => {
                let genre_link = document.createElement("a");
                
                genre_link.classList.add("btn");
                genre_link.classList.add("btn-light");
                genre_link.innerText = genre.name;
                
                asideGenres.appendChild(genre_link);                
            });
        });
}

getGenres();