
const btnAddBook = document.querySelector("#btnAddBook")
const booksDisplay = document.querySelector("#booksDisplay")

btnAddBook.addEventListener("click", showLibrary)


const booksRead = document.querySelector("#books-read");


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

function showLibrary() {
  myLibrary.forEach (book => booksDisplay.textContent += `${book}, `);
}

const theHobbit = new book("The Hobbit", "J.R.R Tolkien", 295, false);
addBookToLibrary("The Hobbit")
addBookToLibrary("Holes")

