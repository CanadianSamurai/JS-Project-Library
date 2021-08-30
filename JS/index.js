//Infos of the books are stored objects inside this array
let myLibrary = [];

//store objects in localStorage
function localStorageSetItem() {
	for (let i = 0; i < myLibrary.length; i++) {
		let object_serialized = JSON.stringify(myLibrary[i]); //changes object to strings
		localStorage.setItem(`myObj${i}`, object_serialized);
	}
}

//If there is local storage data, show when page loaded.
if (localStorage.myObj0) {
	console.log('there is a stored data in localStorage. -Nathan');
	for (let i = 0; i < localStorage.length; i++) {
		let object_deserialized = JSON.parse(localStorage.getItem(`myObj${i}`)); //changes strings to object
		const savedBook = new Book(
			object_deserialized.title,
			object_deserialized.author,
			object_deserialized.numOfPage,
			object_deserialized.read
		);
		myLibrary.push(savedBook);
		displayBooks();
	}
}

//Constructor
function Book(title, author, numOfPage, read) {
	(this.title = title),
		(this.author = author),
		(this.numOfPage = numOfPage),
		(this.read = read);
}
//Prototype
Book.prototype.toggleRead = function () {
	if (this.read == true) {
		this.read = false;
		localStorage.clear();
		return localStorageSetItem();
	} else {
		this.read = true;
		localStorage.clear();
		return localStorageSetItem();
	}
};

//When submit btn is clicked,
const submitBtn = document.querySelector('#submitBtn');
const myForm = document.querySelector('#myForm');

submitBtn.onclick = () => {
	if (myForm[0].value !== '' && myForm[1].value !== '' && myForm[2].value > 0) {
		return submitted();
	}
};

function submitted() {
	let formTitle = myForm[0].value;
	let formAuthor = myForm[1].value;
	let formPages = myForm[2].value;

	addBookToLibrary(formTitle, formAuthor, formPages);
	modal.style.display = 'none';
	return false; //Disables page refresh after submit
}

//Adds book to array
function addBookToLibrary(title, author, numOfPage) {
	let obj = new Book(title, author, numOfPage, false);
	myLibrary.push(obj);
	displayBooks();
	localStorage.clear();
	localStorageSetItem();
}

//Loop through array and display each book on the page
//let i = 0;
function displayBooks() {
	const bookShelf = document.getElementById('book-shelf');
	//Prevents duplicates when new book added
	while (bookShelf.firstChild) {
		bookShelf.removeChild(bookShelf.firstChild);
	}

	for (i = 0; i < myLibrary.length; i++) {
		const title = myLibrary[i].title;
		const author = myLibrary[i].author;
		const numOfPage = myLibrary[i].numOfPage;
		const readStatus = myLibrary[i].read;
		const currentIndex = i;

		let titleDiv = document.createElement('div');
		titleDiv.classList.add('section');
		let authorDiv = document.createElement('div');
		authorDiv.classList.add('section');
		let numOfPageDiv = document.createElement('div');
		numOfPageDiv.classList.add('section');
		//Add infos into newBook div
		let newBook = document.createElement('div');
		newBook.classList.add('book');

		titleDiv.textContent = `Title: ${title}`;
		authorDiv.textContent = `Author: ${author}`;
		numOfPageDiv.textContent = `Pages: ${numOfPage}`;

		newBook.appendChild(titleDiv);
		newBook.appendChild(authorDiv);
		newBook.appendChild(numOfPageDiv);

		//Append everything
		addToggleSwitch(newBook, currentIndex);
		addDeleteBtn(newBook, currentIndex);
		bookShelf.appendChild(newBook);

		if (readStatus == true) {
			const toggleBtn = document.getElementById(`${currentIndex}`);
			toggleBtn.click();
		}
	}
}
//Add toggle siwtch
function addToggleSwitch(newBook, currentIndex) {
	const toggleBtn = document.createElement('label');
	toggleBtn.id = `${currentIndex}`;
	const toggleBtnType = document.createElement('input');
	toggleBtnType.type = 'checkbox';
	const toggleBtnSlider = document.createElement('span');
	const readText = document.createElement('span');
	readText.textContent = 'read?';
	readText.style.fontSize = '20px';
	const breakLine = document.createElement('br');

	//call prototype.function()
	toggleBtnType.addEventListener('click', function () {
		myLibrary[currentIndex].toggleRead();
		console.log('toggled' + currentIndex);
	});

	toggleBtn.classList.add('switch');
	toggleBtnSlider.classList.add('slider', 'round');
	toggleBtn.appendChild(toggleBtnType);
	toggleBtn.appendChild(toggleBtnSlider);

	newBook.appendChild(readText);
	newBook.appendChild(breakLine);
	newBook.appendChild(toggleBtn);
}

//Add delete btn
function addDeleteBtn(newBook, currentIndex) {
	const breakLine = document.createElement('br');
	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'Remove';
	deleteBtn.classList.add('remove-btn');
	deleteBtn.addEventListener('click', function () {
		removeBookFromLibrary(currentIndex);
	});

	newBook.appendChild(breakLine);
	newBook.appendChild(deleteBtn);
}

function removeBookFromLibrary(i) {
	myLibrary.splice(i, 1);
	displayBooks();
	localStorage.clear();
	localStorageSetItem();
}

//Popup form
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementById('close');
//When user clicks on the btn, open modal(popup form)
btn.onclick = () => {
	modal.style.display = 'block';
	myForm.reset();
};
//when user clicks on x btn, close modal
span.onclick = () => (modal.style.display = 'none');
//when user clicks anywhere outside of the modal, close modal
window.onclick = e => {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
};
