const addMovieModal =  document.getElementById('add-modal');
const startAddMovieBtn = document.querySelector('header button');
const backdrop =  document.getElementById('backdrop');
const cancelAddMovieBtn =  addMovieModal.querySelector('.btn--passive');
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const deleteModal = document.getElementById('delete-modal');
const confirmDeleteButton = deleteModal.getElementsByClassName('btn--danger')

const movies = [];

const updateUI = () =>{
  const sectionEntryText =  document.getElementById('entry-text');
  if(movies.length > 0){
  sectionEntryText.style.display = 'none';
  }
  else{
    sectionEntryText.style.display = 'block';
  }
}

const toggleBackdrop = ()=>{
  backdrop.classList.toggle('visible');
}



const showAddMovieModal = ()=>{
  addMovieModal.classList.add('visible');
  toggleBackdrop();
}

const closeAddMovieModal = ()=>{
  addMovieModal.classList.remove('visible'); 
  toggleBackdrop();
}

const closeMovieDeletion = () =>{
  deleteModal.classList.remove('visible');
  toggleBackdrop();
}

const backdropEventHandler = () =>{
  closeAddMovieModal();
  closeMovieDeletion();
  clearUserInputs();
  toggleBackdrop();
}

const cancelAddMovieEventHandler = () => {
  closeAddMovieModal();
  clearUserInputs();

}



const deleteMovie = (id) =>{
   let elementIndex = 0;
   for(let movie of movies){
    if(movie.id === id){
      break;
    }
    elementIndex++;
   }
   movies.splice(elementIndex,1);
   const listRoot = document.getElementById('movie-list');
   listRoot.children[elementIndex].remove();
   updateUI();
   closeMovieDeletion();
}

const deleteMovieHandler = (id) =>{
    deleteModal.classList.add('visible');
    toggleBackdrop();
    //const confirmDelete = deleteModal.getElementsByClassName('btn--danger');
    let confirmDelete = deleteModal.querySelector('.btn--danger');
    const cancelDelete = deleteModal.getElementsByClassName('btn--passive');

    confirmDelete.replaceWith(confirmDelete.cloneNode(true));
    confirmDelete = deleteModal.querySelector('.btn--danger');

    //confirmDelete[0].addEventListener('click',deleteMovie.bind(null,id));
    confirmDelete.addEventListener('click',deleteMovie.bind(null,id));
    cancelDelete[0].removeEventListener('click',closeMovieDeletion);
    cancelDelete[0].addEventListener('click',closeMovieDeletion);
    
}

const renderNewMovieElement = (id,title, url, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.classList.add('movie-element');
  newMovieElement.innerHTML = `
  <div class = "movie-element__image">
  <img src="${url}" alt="${title}">
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <P>${rating}/5 stars</P>
  </div>
  `;
  newMovieElement.addEventListener('click',deleteMovieHandler.bind(null,id))
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
}

const clearUserInputs = () =>{
  for (let usrInput of userInputs){
    usrInput.value = '';
  }
}

const addMovieHandler = () =>{
    const id  =  Math.random().toString();
    const titleValue = userInputs[0].value.trim();
    const imageUrlValue = userInputs[1].value.trim();
    const ratingValue = userInputs[2].value;

    if(titleValue === '' ||
       imageUrlValue === '' ||
       +ratingValue < 1  || 
       +ratingValue >5 
    ){
      alert('Please enter valid input. (Rating between 1 and 5)');
      return;
    }

    const newMovie = {
      id : id,
      title : titleValue,
      imageurl : imageUrlValue,
      rating : ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    closeAddMovieModal();
    clearUserInputs();
    renderNewMovieElement(newMovie.id,newMovie.title,newMovie.imageurl,newMovie.rating);
    updateUI();

}

startAddMovieBtn.addEventListener('click',showAddMovieModal);
backdrop.addEventListener('click',backdropEventHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieEventHandler);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);
confirmDeleteButton.addEventListener('click',confirmDeleteHandler)

