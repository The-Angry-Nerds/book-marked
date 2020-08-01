'use strict'

var tabsDiv = document.getElementById("tabs");
var categDiv = document.getElementById("bookCateg");
var empty = document.createElement("p");
empty.innerHTML = `No books available`


var popUpDiv = document.getElementById('popUpInfo');
categDiv.addEventListener('click', showPopUp);
function showPopUp() {
    if (filteredBooks.length !== 0) {

        renderPopup(filteredBooks)

    }
    else {
        renderPopup(allBooks)
    }
}

function renderPopup(indexArray) {   //Render Pop up for either default or filtered books

    for (let index = 0; index < indexArray.length && index < 3; index++) {
        if (event.target.id == indexArray[index].title) {
            popUpDiv.setAttribute('style', 'display:block;');
            popUpDiv.innerHTML =
                `<a onclick="displayHide()" style="float:right;" id="span">X</a>
    <ul> 
        <li>Title: ${indexArray[index].title} </li>     
        <li>Author: ${indexArray[index].author}</li>                
        <liCategory: >${indexArray[index].categories}</li>                
        <li>Available copies: ${indexArray[index].copies}</li>
        <li>City: ${indexArray[index].city}</li>                
        <li>Location: ${indexArray[index].location}</li>                  
        <li>Contact info:${indexArray[index].number}</li>                
    </ul> `
        }
    }
}



function displayHide() {
    popUpDiv.setAttribute("style", "display:none;")
}

//list all books as a default
if (allBooks.length == 0) {
    categDiv.appendChild(empty);
} else {
    var book;
    for (let index = 0; index < allBooks.length && index < 3; index++) { //to take only first 3 books
        book = generateIndexBooks(index, allBooks);
        categDiv.appendChild(book);
    }
}

//when tabs are clicked
tabsDiv.addEventListener('click', clickHandler);
function clickHandler() {
    if (event.target.id !== 'tabs') {  // Makes sure it only picks up the 3 buttons not the whole divs

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

    image.setAttribute('src', '../images/cover3.jpg');
    image.setAttribute('id',array[index].title); //to use as an target id

    title.textContent = array[index].title;
    author.textContent = array[index].author;

    info.append(title);
    info.append(author);
    bookParent.append(image);
    bookParent.append(info);
    return bookParent;
};