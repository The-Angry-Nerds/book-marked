'use strict'

var columnOne = document.getElementById('column1');
var columnTwo = document.getElementById('column2');
var catDiv = document.getElementById("catButtons");
var bookTitle;

var searchBar = document.getElementById('myInput')

var filteredSearchBooks = [];


// create a div that has the books info 
function generateBook(index, array) {
    var bookParent = document.createElement('div');

    var image = document.createElement('img');
    var emptyPage = document.createElement('div')
    var info = document.createElement('ul');
    var title = document.createElement('li');
    var author = document.createElement('li');
    var categories = document.createElement('li');
    var copies = document.createElement('li');
    var city = document.createElement('li');
    var number = document.createElement('li');

    var onCoverInfo = document.createElement('ul');
    var onCovertitle = document.createElement('li');
    var onCoverauthor = document.createElement('li');


    //in the div
    bookParent.setAttribute('class', 'book');
    emptyPage.setAttribute('class', 'emptyPage');
    image.setAttribute('class', 'cover');
    image.setAttribute('src', '../images/cover3.jpg');

    onCoverInfo.setAttribute('class', 'titleAuthor');
    info.setAttribute('class', 'infoList');

    //li elements 
    title.innerHTML = array[index].title;
    author.innerHTML = array[index].author;
    categories.innerHTML = array[index].categories;
    copies.innerHTML = array[index].copies;
    city.innerHTML = array[index].city.name;
    number.innerHTML = array[index].number;

    onCovertitle.innerHTML = array[index].title;
    onCovertitle.setAttribute('class', 'on-cover-title');

    onCoverauthor.innerHTML = 'By: ' + array[index].author;

    //button w/ added an onClick event
    var order = document.createElement('button');
    order.textContent = 'Take book';
    order.setAttribute('onclick', 'ConfirmBook(' + index + ')');
    order.setAttribute('class', 'removeButton');

    info.append(title);
    info.append(author);
    info.append(categories)
    info.append(copies);
    info.append(city);
    info.append(number);
    onCoverInfo.append(onCovertitle);
    onCoverInfo.append(onCoverauthor);
    bookParent.append(image);
    bookParent.append(emptyPage);
    bookParent.append(info);
    bookParent.append(onCoverInfo);
    bookParent.append(order);


    return bookParent;
}


// append the created div that has the info to the two columns in the html page
function fillCol(array) {
    if (array.length == 0) {
        console.log('empty');
        columnOne.appendChild(empty);
    }

    for (let index = 0; index < array.length; index++) {
        var childdiv;
        if (index % 2 == 0) {
            childdiv = generateBook(index, array);
            columnOne.appendChild(childdiv);
        } else {
            childdiv = generateBook(index, array);
            columnTwo.appendChild(childdiv);
        }
    }
}

var catId;

// remove book from the list of availabe books (allBooks) permenantly 
function removeBook(index) {
    BookTitle(index)
    var allBooks = JSON.parse(localStorage.getItem('allBooks'));
    var outerIndex;
    for (let i = 0; i < allBooks.length; i++) {
        if (allBooks[i].title == bookTitle) {
            outerIndex = i
        }
    }
    allBooks.splice(outerIndex, 1);
    allBooks = JSON.stringify(allBooks);
    localStorage.setItem("allBooks", allBooks);
    location.reload();
};

// book title loop


function BookTitle(index) {
    var removeArray = [];
    if (catId == undefined || catId == 'allCat') {
        removeArray = allBooks;
    }
    else {
        removeArray = filteredBooks;
    }
    bookTitle = removeArray[index].title;
}


// clear the content of the columns
function clearCol() {
    columnOne.textContent = "";
    columnTwo.textContent = "";
}


catDiv.addEventListener('click', generateBookByCat);
function generateBookByCat() {

    searchBar.value = ''; // clear Search bar content
    clearCol();
    catId = event.target.id;
    if (catId !== "allCat") {
        filterByCat(catId);
        fillCol(filteredBooks); //filtered books and their function in the app.js    
    } else {
        fillCol(allBooks);
    }

}



// Search Bar function

var searchString;

searchBar.addEventListener('keyup', (e) => {
    searchString = e.target.value.toLowerCase();
    filteredSearchBooks = [];
    if (catId == undefined || catId == 'allCat') {
        searchBarLoop(allBooks);
    }
    else {
        searchBarLoop(filteredBooks);

    }
    clearCol();
    fillCol(filteredSearchBooks);
});

// search bar for loop

function searchBarLoop(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].title.toLowerCase().includes(searchString) || (array[index].author.toLowerCase().includes(searchString))) {
            filteredSearchBooks.push(array[index])
        }
    }
}

// Confirmation pop up function

var confirmParent = document.getElementById("confirm");
var span = document.createElement("span");
var text = document.createElement('p');
var secondDiv = document.createElement("div")
function ConfirmModal() {
    secondDiv.setAttribute('id', 'secondDiv');
    span.setAttribute('id', 'span');
    span.innerHTML = 'x';
    var confirm = document.createElement('p');
    confirm.setAttribute('id', 'bookConfirm');
    text.setAttribute('id', 'bookConfirmTitle');
    confirm.textContent = 'Confirm your order';
    var cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel'
    cancelButton.setAttribute('class', 'confirmButtons');
    cancelButton.onclick = function () {
        confirmParent.style.display = 'none';
    }
    secondDiv.append(span);
    secondDiv.append(confirm);
    secondDiv.append(text);
    secondDiv.append(cancelButton);
    confirmParent.append(secondDiv);

};
var confirmButton;
function ConfirmBook(index) {
    BookTitle(index)
    text.innerHTML = 'Your book is: ' + bookTitle;
    if (confirmButton == undefined) {
        confirmButton = document.createElement('button');
        confirmButton.textContent = 'Confirm'
        confirmButton.setAttribute('class', 'confirmButtons');
        confirmButton.setAttribute('onclick', 'removeBook(' + index + ')');
        secondDiv.append(confirmButton);
    }
    confirmParent.style.display = 'block';
};



span.onclick = function () {
    confirmParent.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == confirmParent) {
        confirmParent.style.display = 'none';
    };
};


// main function here 

fillCol(allBooks);
ConfirmModal();