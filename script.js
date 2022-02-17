


class book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = (!read) ? "not read yet" : "have read";
    this.info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

let myLibrary = [];

const btnNewBook = document.querySelector("#btnNewBook");
const btnAddBook = document.querySelector("#btnAddBook");

const btnClose = document.querySelector("#close");





btnNewBook.addEventListener("click", newBook);
btnAddBook.addEventListener("click", addBook);
btnClose.addEventListener("click", closeForm);



function newBook() {
  document.getElementById("formContainer").style.display = "flex";
}

function addBook() {
  // Check to see what radio button is checked. Yes = True. No = False

  boolRead = readBool();

  // get data out of forms
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = Number(document.querySelector("#pages").value);

  // make new book from the data
  const newBook = new book(title, author, pages, boolRead);

  //add new book to library
  addBookToLibrary(newBook);

  updateTotals(boolRead);
  showLibrary();
  closeForm()
  console.log("book added")
}

function closeForm() {
  document.getElementById("formContainer").style.display = "none";
  resetForm();
}


function resetForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#readTrue").checked = true;
}

// check to see what radio button is checked. Yes or No (True or False)
function readBool() {
  if (document.querySelector(`input[name="boolRead"]:checked`).value === "true") {
    return true;
  } else {
    return false;
  }
}

// Show everything that has been put in the library
function showLibrary() {
  // clear the books display first
  booksDisplay.textContent = "";

  // for each book in the library array create a new p element
  // add the new books info into that new p element
  // append that new p element to the booksDisplay.
  myLibrary.forEach (book => {
    const newPara = document.createElement("p");
    newPara.classList.add("book");
    newPara.textContent = `${book.info}`;
    booksDisplay.appendChild(newPara);
  })
}

function updateTotals(boolRead) {
  if (boolRead) {
    booksReadTotal.textContent++;
  } else {
    booksNotReadTotal.textContent++;
  }
  booksTotal.textContent++;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Create a new book from the form data and add it to the library
// when Enter is pressed.
document.addEventListener("keyup", function(e) {
  if (document.getElementById("formContainer").style.display !== "flex") {
    return
  }
  if (e.key === "Enter"){
    e.preventDefault();
    btnAddBook.click();
  }
})