
let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = (!read) ? "not read yet": "have read";
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Show everything that has been put in the library
function showLibrary() {
  booksDisplay.textContent = "";
  myLibrary.forEach (book => booksDisplay.textContent += `${book}, `);
}



const btnAddBook = document.querySelector("#btnAddBook")
const booksDisplay = document.querySelector("#booksDisplay")
const booksRead = document.querySelector("#books-read");



btnAddBook.addEventListener("click", () => {
  // Check to see what radio button is checked. Yes = True. No = False
  const boolRead = document.querySelector(`input[name="boolRead"]:checked`).value;
  console.log(boolRead)

  // get data out of forms
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").textContent;
  const pages = document.querySelector("#pages").textContent;

  console.log(`title: ${title}`)

  // make new book from the data
  const newBook = new book(title, author, pages, boolRead);

  //add new book to library
  addBookToLibrary(newBook);

  showLibrary();
})


// const theHobbit = new book("The Hobbit", "J.R.R Tolkien", 295, false);
// addBookToLibrary("The Hobbit")
// addBookToLibrary("Holes")