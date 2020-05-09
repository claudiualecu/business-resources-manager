var movies;
var apiPath='https://www.omdbapi.com/?t=';
var apiKey='&apikey=9ba301ca';
var input;

function setup() {
  noCanvas();
  var button = select('#submit');
  button.mousePressed(movieAsk);
  input=select('#movie');
}

function movieAsk(){
  url=apiPath+input.value()+apiKey;
  loadJSON(url, gotData);
}

function gotData(data){
  movies=data;
}
