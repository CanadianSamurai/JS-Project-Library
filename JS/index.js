let myLibrary = [
    {
        title : 'Life of Pi',
        author : 'John Mackenzy',
        numOfPage : 150
    }, 
    {
        title : 'Think, Grow, Rich',
        author : 'Napoleon Hill',
        numOfPage : 89
    },
    {
        title : 'Namastays',
        author : 'Inis Bramancharis',
        numOfPage : 1000
    }
];

//Constructor
function Book(title, author, numOfPage) {
    this.title = `Title: ${title}`,
    this.author = `Author: ${author}`,
    this.numOfPage = `Pages: ${numOfPage}`
}

//test
//if (submit bttn pressed && modal.display == 'none') {
// const inputtedTitle = querySelector('title').value
// addBookToLibrary(inputtedTitle)
//}
function submitted() {

}

//Adds book to array
function addBookToLibrary(title, author, numOfPage) {
    let obj = new Book(title, author, numOfPage )
    myLibrary.push(obj);
    displayBooks();
    console.table(myLibrary);
}

//Loop through array and display each book on the page
function displayBooks() {

    const bookShelf = document.getElementById('book-shelf');
    //Prevents duplicates when new book added
    while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild);
    }
    
    for(let i = 0; i < myLibrary.length; i++) {
    const title = myLibrary[i].title;
    const author = myLibrary[i].author;
    const numOfPage = myLibrary[i].numOfPage;

    let titleDiv = document.createElement('div');
    titleDiv.classList.add('section');
    let authorDiv = document.createElement('div');
    authorDiv.classList.add('section');
    let numOfPageDiv = document.createElement('div');
    numOfPageDiv.classList.add('section');
    
    let newBook = document.createElement('div');
    newBook.classList.add('book');

    titleDiv.textContent = title;
    authorDiv.textContent = author;
    numOfPageDiv.textContent = numOfPage;

    newBook.appendChild(titleDiv);
    newBook.appendChild(authorDiv);
    newBook.appendChild(numOfPageDiv);
    
    bookShelf.appendChild(newBook);
    }
}

//Popup form
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementById('close');
//When user clicks on the btn, open modal(popup form)
btn.onclick = () => modal.style.display = 'block';
//when user clicks on x btn, close modal
span.onclick = () => modal.style.display = 'none';
//when user clicks anywhere outside of the modal, close modal
window.onclick = e => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}