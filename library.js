
let library = [
    {book: 'Festim dos Corvos', author: 'George Martin', pages: 570, read: true},
    {book: 'Watchmen', author: 'Alan Moore', pages: 331, read:true},
    {book: 'Memorias de Poirot', author: 'Edgar Allan Poe', pages: 400, read:true}
]

function Book(book, author, pages, isread) {
    this.book = book;
    this.author = author;
    this.pages = pages;
    this.read = isread;
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
const createBookCard = (book, i) => {
    const bookcard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttongroup = document.createElement('div');
    const notread = document.createElement('button');
    const remove = document.createElement('button');


    bookcard.classList.add('cardb');
    buttongroup.classList.add('button-group');
    notread.classList.add('btn');
    remove.classList.add('btn');
    remove.classList.add('delete-btn');
    

    title.textContent = book.book;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    notread.textContent = 'Not Read';
    remove.textContent = 'Remove'

    bookcard.dataset.book = i;

    bookcard.appendChild(title);
    bookcard.appendChild(author);
    bookcard.appendChild(pages);
    buttongroup.appendChild(notread);
    buttongroup.appendChild(remove);
    bookcard.appendChild(buttongroup);

    bookgrid.appendChild(bookcard);

}

// Clean the bookgrid div and fill it with all the books on the library array
function fillbookgrid () {
bookgrid.innerHTML = "";

for (i=0;i < library.length; i++) {
    createBookCard(library[i], i)
}
}

const booksave = document.getElementById('booksave')


// Reset the grid with the added item every time user adds a book
booksave.addEventListener('click', () => {
    addBooktoLibrary();
    console.log('Sucess');
    fillbookgrid ();
    
})

//Delete the book function
function deletebookevent(){
    let deletelist = document.getElementsByClassName('delete-btn');
    let deletearray = Array.from(deletelist);

deletearray.forEach((button) => {
       
    button.addEventListener('click', () => {
        parentcard = button.parentElement.parentElement;
        parentcardid = parentcard.getAttribute('data-book');
        console.log(parentcardid);
        console.log('Cliked delete');
        console.log(deletearray.indexOf(button));
        library.splice(parentcardid,1);
        parentcard.remove();
       
    })
})
}


// Fill the page when the user first opens it
fillbookgrid ()
deletebookevent()

