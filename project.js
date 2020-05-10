var movies;
var heroes;
var apiPathMovies='https://www.omdbapi.com/?s=';
var apiPathHeroes='https://www.superheroapi.com/api.php/'
var apiKeyHeroes='1905472796253293/'
var searchHeroes='search/'
var apiKeyMovies='&apikey=9ba301ca';
var input;
var input1;

function setup() {
  noCanvas();
  var button = select('#submit');
  button.mousePressed(movieAsk);
  var buttonHero = select('#submit1');
  buttonHero.mousePressed(heroAsk);
  input=select('#movie');
  input1=select('#hero');
}

function movieAsk(){
  url=apiPathMovies+input.value()+apiKeyMovies;
  loadJSON(url, gotData);
}
function heroAsk(){
    urlHeroes=apiPathHeroes+apiKeyHeroes+searchHeroes+input1.value();
    loadJSON(urlHeroes, gotHero);
}

function gotData(data){
    console.log(data);
  movies=data;
  populateMovieCards(movies);
}
function gotHero(data){
    console.log(data);
    heroes=data;
    showHero(heroes);
}

function populateMovieCards(movieList) {
    let html = '';
    movieList.Search.forEach(item => {
        html += `<div class="card" style="width: 18rem;">
            <img src  ="${item.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.Title}</h5>
            <p class="card-text">${item.Year}</p>
            </div>
             </div>`
    });

    $('#list').html(html);
}
function showHero(heroes){
    
    let html = '';
    heroes.results.forEach(item1 => {
        html += `<div class="card" style="width: 18rem;">
            <img src  ="${item1.image.url}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item1.name}</h5>
            <p class="card-text">${item1.biography.aliases}</p>
            </div>
             </div>`
    });

    $('#list').html(html);
}
