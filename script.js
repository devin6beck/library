let myLibrary = [];

class book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = `By: ${author}`;
    this.pages = `${pages} pages`;
    this.read = read;
    this.info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

// buttons
const btnNewBook = document.querySelector(".btn-newBook");
const btnAddBook = document.querySelector(".btn-addBook");
const btnClose = document.querySelector(".close");

btnNewBook.addEventListener("click", newBook);
btnAddBook.addEventListener("click", addBook);
btnClose.addEventListener("click", closeForm);

// spans with totals
let booksRead = document.querySelector('.total-read');
let booksUnread = document.querySelector('.total-unread');
let booksTotal = document.querySelector('.total-books');

let display = document.querySelector('.display');

function newBook() {
  document.querySelector('.form-container').style.display = "block";
  document.querySelector(".title").focus();
}

function addBook() {
  // Check to see what radio button is checked. Yes = True. No = False

  const boolRead = readBool();

  // get data out of forms
  const title = document.querySelector(".title").value;
  const author = document.querySelector(".author").value;
  const pages = Number(document.querySelector(".pages").value);

  // make new book from the data
  const newBook = new book(title, author, pages, boolRead);

  //add new book to library
  addBookToLibrary(newBook);

  updateTotals(boolRead);
  console.log(`boolread = ${boolRead}`)
  showLibrary();
  closeForm()
  console.log("book added")
}

// check to see what radio button is checked. Yes or No (True or False)
function readBool() {
  return document.querySelector(`input[name="boolRead"]:checked`).value;
}

function closeForm() {
  document.querySelector(".form-container").style.display = "none";
  resetForm();
}

function resetForm() {
  document.querySelector(".title").value = "";
  document.querySelector(".author").value = "";
  document.querySelector(".pages").value = "";
  document.querySelector(".readTrue").checked = true;
}

// Show everything that has been put in the library
function showLibrary() {
  // clear the books display first
  display.textContent = "";

  myLibrary.forEach (book => {
    const card = createCard(book);
    display.appendChild(card);
  })
}


function createCard(book) {
  const card = document.createElement('div')
  card.classList.add('card');
  const title = document.createElement('p');
  title.textContent = `${book.title}`;
  const author = document.createElement('p');
  author.textContent = `${book.author}`;
  const pages = document.createElement('p');
  pages.textContent = `${book.pages}`;
  const read = document.createElement('p');
  read.textContent = `${book.read}`;

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);

  const cardBtnDiv = document.createElement('div');
  card.appendChild(cardBtnDiv);
  const toggleRead = document.createElement('button');
  toggleRead.classList.add('toggle-read');
  toggleRead.textContent = "Toggle Read Status";
  cardBtnDiv.appendChild(toggleRead);
  toggleRead.addEventListener("click", () => {
    if (book.read === "Read") {
      book.read = "Unread";
    } else {
      book.read = "Read";
    }
    updateTotals();
    showLibrary();

  });



  return card;
}



function updateTotals() {
  resetTotals();
  myLibrary.forEach(book => {
    switch (book.read) {
      case "Unread": booksUnread.textContent++;
        break;

      case "Read": booksRead.textContent++;
        break;
    }
    booksTotal.textContent++;
  })
}

function resetTotals() {
  booksRead.textContent = 0;
  booksUnread.textContent = 0;
  booksTotal.textContent = 0;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Create a new book from the form data and add it to the library
// when Enter is pressed.
document.addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    if (document.querySelector(".form-container").style.display !== "block") {
      e.preventDefault();
      btnNewBook.click();
    } else {
      e.preventDefault();
      btnAddBook.click();
    }
  }
})