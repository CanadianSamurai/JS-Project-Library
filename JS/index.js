let myLibrary = [];

//Constructor
function Book() {

}

//Adds book to array
function addBookToLibrary(bookName) {
    let obj = {
         bookName : bookName
    };
    myLibrary.push(obj);

    console.table(myLibrary);

}