'use strict'

var tabsDiv = document.getElementById("tabs");
var categDiv = document.getElementById("bookCateg");
var empty = document.createElement("p");
empty.innerHTML = `No books available`

//list all books as a default
if (allBooks.length == 0) {
    categDiv.appendChild(empty);
} else {
    for (let i = 0; i < allBooks.length && i < 3; i++) {
        categDiv.appendChild(generateIndexBooks(i, allBooks));
    }
}

//when tabs are clicked
tabsDiv.addEventListener('click', clickHandler);
function clickHandler() {
    categDiv.textContent = ""; //remove previous books
    filterByCat(event.target.id);
    var book;
    if (filteredBooks.length == 0) {
        //TODO :add how many books in category 

        categDiv.appendChild(empty);
    } else {
        for (let index = 0; index < filteredBooks.length && index < 3; index++) { //to take only first 3 books
            book = generateIndexBooks(index, filteredBooks);
            categDiv.appendChild(book);
        }
    }


}

function generateIndexBooks(index, array) {

    var bookParent = document.createElement('div');
    var image = document.createElement('img');
    var info = document.createElement('ul');
    var title = document.createElement('li');
    var author = document.createElement('li');

    bookParent.setAttribute('class', 'book');
    bookParent.setAttribute('style', 'display : inline-block; margin: 0px 1%;')
    image.setAttribute('class', 'cover');
    image.setAttribute('src', 'https://place-hold.it/200x250');

    title.textContent = array[index].title;
    author.textContent = array[index].author;

    info.append(title);
    info.append(author);
    bookParent.append(image);
    bookParent.append(info);
    return bookParent;


}

