const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addSection = document.querySelector('#book-section');
const addBtn = document.getElementById('add-btn');
const bookArray = JSON.parse(localStorage.getItem('book')) || [];
const listNav = document.getElementById('list');
const addNav = document.getElementById('add-it');
const contactNav = document.getElementById('contact-us');
const showBookSection = document.getElementById('added-book');
const contactSection = document.getElementById('contact');
const time = document.getElementById('calendar');

class Book {
  constructor(titleInput, authorInput) {
    this.title = titleInput.value;
    this.author = authorInput.value;
    this.id = bookArray.length;
  }
}

function showBook(bookArray) {
  addSection.innerHTML = '';
  bookArray.forEach((book, id) => {
    addSection.innerHTML += ` 
    <div class="container-book">
      <div class="books-title">
      <p> ${book.title} </p>
      <p> by </p>
      <p> ${book.author} </p>
      </div>
      <button onclick="removeBook(this.id)" type="button" id="${id}">Remove </button>
    </div>
  `;
  });
}

addBtn.addEventListener('click', () => {
  if (titleInput.value !== '' && authorInput.value !== '') {
    const item = new Book(titleInput, authorInput);
    bookArray.push(item);
    localStorage.setItem('book', JSON.stringify(bookArray));
    showBook(bookArray);
    titleInput.value = '';
    authorInput.value = '';
  }
});

function removeBook(selectedId) { /* eslint-disable-line */
  bookArray.splice(selectedId, 1);
  showBook(bookArray);
  localStorage.setItem('book', JSON.stringify(bookArray));
}

showBook(bookArray);

listNav.addEventListener('click', () => {
  contactSection.classList.add('display-none');
  showBookSection.classList.add('display-none');
  addSection.classList.remove('display-none');
});

addNav.addEventListener('click', () => {
  contactSection.classList.add('display-none');
  showBookSection.classList.remove('display-none');
  addSection.classList.add('display-none');
});

contactNav.addEventListener('click', () => {
  addSection.classList.add('display-none');
  showBookSection.classList.add('display-none');
  contactSection.classList.remove('display-none');
});

const dateTable = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getTime() {
  const globalDate = new Date();
  const year = globalDate.getFullYear();
  const hours = globalDate.getHours();
  const minutes = globalDate.getMinutes();
  const seconds = globalDate.getSeconds();
  const day = globalDate.getDate();
  let month = globalDate.getMonth();
  month = dateTable[month];

  time.innerHTML = `${month} ${day}th ${year}, ${hours}:${minutes}:${seconds}`;
}

window.addEventListener('load', () => {
  showBook(bookArray);
  setInterval(getTime, 1000);
});