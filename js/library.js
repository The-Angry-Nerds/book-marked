'use strict'

console.log(allBooks);
var columnOne = document.getElementById('column1');
var columnTwo = document.getElementById('column2');
var columnThree = document.getElementById('column3');


for (let index = 0; index < allBooks.length; index++) {
    if (index % 3 == 0) {
        var bookParent = document.createElement('div');
        generateBook(index);
        columnOne.appendChild(bookParent);
    }
    else if (index % 3 == 1) {
        var bookParent = document.createElement('div');
        generateBook(index);
        columnTwo.appendChild(bookParent);

    }
    else {
        var bookParent = document.createElement('div');
        generateBook(index);
        columnThree.appendChild(bookParent);
    }
};


function generateBook(index) {
    bookParent.setAttribute('class', 'book')
    var image = document.createElement('img');
    image.setAttribute('class', 'cover')
    image.setAttribute('src', 'https://place-hold.it/200x250')
    var info = document.createElement('ul');
    info.setAttribute('class', 'infoList')
    var title = document.createElement('li');
    title.innerHTML = allBooks[index].title;
    var author = document.createElement('li');
    author.innerHTML = allBooks[index].author;
    var categories = document.createElement('li');
    categories.innerHTML = allBooks[index].categories;

    var remove = document.createElement('button')
    remove.textContent = 'take book'
    remove.setAttribute('onclick', 'removeBook(' + index + ')')

    var copies = document.createElement('li');
    copies.innerHTML = allBooks[index].copies;
    var city = document.createElement('li');
    city.innerHTML = allBooks[index].city;
    var location = document.createElement('li');
    location.innerHTML = allBooks[index].location;
    var number = document.createElement('li');
    number.innerHTML = allBooks[index].number;

    info.append(title);
    info.append(author);
    info.append(categories)
    info.append(copies);
    info.append(city);
    info.append(location);
    info.append(number);
    bookParent.append(image);
    bookParent.append(info);
    bookParent.append(remove);

}
function removeBook(index) {
    console.log('Start of function');
    var allBooks = JSON.parse(localStorage.getItem('allBooks'));
    allBooks.splice(index, 1);
    allBooks = JSON.stringify(allBooks);
    localStorage.setItem("allBooks", allBooks);
    window.location.replace('library.html');
}
