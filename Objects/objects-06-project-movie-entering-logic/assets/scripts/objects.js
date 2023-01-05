const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const MOVIES =[];

function addMovie(){
     let title = document.getElementById('title').value;
     let label = document.getElementById('extra-name').value;
     let labelvalue = document.getElementById('extra-value').value;
     if(title === '' || label ==='' || labelvalue ==='') return;
     const movie = {
      
       info : {
        title,
       [label] : [labelvalue]
       }
     }
     MOVIES.push(movie);
     displayList();
}


function searchMovie(){
  console.log(this);
 const filterValue = document.getElementById('filter-title').value;
 displayList(filterValue);
}


function displayList(filter =''){
  const movieList = document.getElementById('movie-list');
  if(MOVIES.length === 0){
    movieList.classList.remove('visible');
    return;
  }
  else{
    movieList.classList.add('visible')
  }
  movieList.innerHTML = '';
  const filteredMovies = !filter ? MOVIES : MOVIES.filter(movie => movie.info.title.includes(filter));
  filteredMovies.forEach((movie)=>{
    const listItem = document.createElement('li');
    const {info} = movie;
    const {title : movieTitle} =info;
    let text = `Title : ${movieTitle}`;
    for(let key in info){
      if(key !== 'title')
      text = text + `  ${key} - ${info[key]}`;
    }
    
    listItem.textContent = text;
    movieList.append(listItem)
  })  
}


addMovieBtn.addEventListener('click',addMovie);
searchBtn.addEventListener('click',searchMovie)