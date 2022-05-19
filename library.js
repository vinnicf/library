
let library = [
    {book: 'Festim dos Corvos', author: 'George Martin', pages: 570, read: true},
    {book: 'Watchmen', author: 'Alan Moore', pages: 331, read:true}
]

function Book(book, author, pages, isread) {
    this.book = book;
    this.author = author;
    this.pages = pages;
    this.read = isread
}

function addBooktoLibrary () {
    
    let book = document.getElementById('booktitle').value;
    let author = document.getElementById('bookauthor').value;
    let pages = document.getElementById('bookpages').value;
    let isread = false;

    const newbook = new Book (book, author, pages, isread);
// Push newbook into the array;
    library.push(newbook); 
}

const bookgrid = document.getElementById('bookgrid');

// Build the card on the page for each item in library
const createBookCard = (book) => {
    const bookcard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');

    bookcard.classList.add('cardb');

    title.textContent = book.book;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;


    bookcard.appendChild(title);
    bookcard.appendChild(author);
    bookcard.appendChild(pages);
    bookgrid.appendChild(bookcard);

}

// Clean the bookgrid div and fill it with all the books on the library array
function fillbookgrid () {
bookgrid.innerHTML = "";

for (i=0;i < library.length; i++) {
    createBookCard(library[i])

}
}

const booksave = document.getElementById('booksave')

booksave.addEventListener('click', () => {
    addBooktoLibrary();
    console.log('Sucess');
    fillbookgrid ()
})






