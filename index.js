const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addSection = document.querySelector('#book-section');
const addBtn = document.getElementById('add-btn');
const bookArray = JSON.parse(localStorage.getItem('book')) || [];

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