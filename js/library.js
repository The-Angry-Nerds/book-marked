'use strict'

var columnOne = document.getElementById('column1');
var columnTwo = document.getElementById('column2');
var catDiv = document.getElementById("catButtons");

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
    var remove = document.createElement('button');
    remove.textContent = 'Take book';
    remove.setAttribute('onclick', 'removeBook(' + index + ')');
    remove.setAttribute('class', 'removeButton');

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
    bookParent.append(remove);


    return bookParent;
}


// append the created div that has the info to the two columns in the html page
function fillCol(array) {
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


// remove book from the list of availabe books (allBooks) permenantly 
function removeBook(index) {
    console.log('Start of function');
    var allBooks = JSON.parse(localStorage.getItem('allBooks'));
    allBooks.splice(index, 1);
    allBooks = JSON.stringify(allBooks);
    localStorage.setItem("allBooks", allBooks);
    location.reload();
}


// clear the content of the columns
function clearCol() {
    columnOne.textContent = "";
    columnTwo.textContent = "";
}

var catId;

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

// main function here 

fillCol(allBooks);
