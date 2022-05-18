
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

function addBooktoLibrary (book, author, pages, isread) {
    const newbook = new Book (book, author, pages, isread)
    console.log(newbook.author);
    console.log(newbook);

// Push newbook into the array;
    library.push(newbook); 

}

const bookgrid = document.getElementById('bookgrid');

// This receives book item from library (ex library[0]) and build the card on the page 
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


