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
function Book() {

}

//Adds book to array
function addBookToLibrary(title, author, numOfPage) {
    let obj = {
         title : title,
         author : author,
         numOfPage : numOfPage
    };
    myLibrary.push(obj);

    console.table(myLibrary);
}

//Loop through array and display each book on the page
function displayBooks() {
    const bookShelf = document.getElementById('book-shelf');
  
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