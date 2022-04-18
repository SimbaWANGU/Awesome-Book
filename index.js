const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addSection  = document.querySelector('#book-section');
const addBtn = document.getElementById('add-btn');
let bookArray = JSON.parse(localStorage.getItem("book")) || []


function book(titleInput , authorInput) {
  this.title = titleInput.value;
  this.author = authorInput.value
}

function showBook( bookArray){

  addSection.innerHTML = ""
  bookArray.forEach(book => {
    console.log(book)
    addSection.innerHTML += ` 
    <div>
    <span>${book.title}</span>
    <span> by </span>
    <span>${book.author}</span>
    <button type="button ">Remove </button>
    <hr>
  </div>
  `
  });
}



addBtn.addEventListener('click', () => {
 if(titleInput.value != "" && authorInput.value != "")
{
  let item = new book ( titleInput , authorInput )
  bookArray.push(item)

  localStorage.setItem ("book", JSON.stringify (bookArray))
  showBook( bookArray )
  titleInput.value = ""
  authorInput.value =""

}
})

showBook( bookArray )