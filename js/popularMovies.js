import {api_key}  from './env.js';

const sectionPopularMovies = document.getElementById("popularity_movies");


const addItemToSectionPopularMovies = (title, description, image) => {
    let article = document.createElement("ARTICLE"); 
    article.classList.add("col-sm")
    let cutDescription = wordsCut(description);
    
    article.innerHTML = `
        <div class='card movie-item' style='width: 15rem;'>
            <img src='https://image.tmdb.org/t/p/w220_and_h330_face${image}' class='card-img-top movie-image' alt='...'/>
            <div class='card-body'>
                <div class='card-text'>
                    <h4 class='movie-title'>${title}</h4>
                    <p class='movie-description'>${cutDescription} ...</p>
                </div>
            </div>
        </div>
    `;

    sectionPopularMovies.appendChild(article);
}

const getPopularMovies = async () => {
    let res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    res = await res.json();
    const movies = await res.results;
    
    for(let i=0; i<=5; i++){
        addItemToSectionPopularMovies(movies[i].original_title, movies[i].overview, movies[i].poster_path)
    }  
}

const wordsCut = text => {
    let array_words = text.split(" ");
    let text_cut=""
    for(let i=0; i<=20; i++){
        text_cut=text_cut+" "+array_words[i];
    }

    return text_cut;
}



getPopularMovies();
