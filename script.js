
let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = (!read) ? "not read yet": "have read";
  this.info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}


function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Show everything that has been put in the library
function showLibrary() {
  booksDisplay.textContent = "";
  myLibrary.forEach (book => {
    const newPara = document.createElement("p");
    newPara.textContent = `${book.info}`;
    booksDisplay.appendChild(newPara);
  })
    
}


function readBool() {
  if (document.querySelector(`input[name="boolRead"]:checked`).value === "true") {
    return true;
  } else {
    return false;
  }
}


const btnAddBook = document.querySelector("#btnAddBook");
const booksDisplay = document.querySelector("#booksDisplay");
const booksRead = document.querySelector("#books-read");

let title;
let author;
let pages;
let boolRead;


btnAddBook.addEventListener("click", () => {
  // Check to see what radio button is checked. Yes = True. No = False
  
  boolRead = readBool();

  // get data out of forms
  title = document.querySelector("#title").value;
  author = document.querySelector("#author").value;
  pages = Number(document.querySelector("#pages").value);

  // make new book from the data
  const newBook = new book(title, author, pages, boolRead);

  //add new book to library
  addBookToLibrary(newBook);

  showLibrary();
})

document.addEventListener("keyup", function(e) {
  if (e.key === "Enter"){
    e.preventDefault();
    btnAddBook.click();
  }
})