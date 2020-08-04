'use strict'

alert(window.location.href);

if (localStorage.getItem("name") === null) {
    if (window.location.href == "https://the-angry-nerds.github.io/book-marked/index.html" || 'https://the-angry-nerds.github.io/book-marked/' == window.location.href) {
        window.location.replace('/pages/user.html');
    }
    else {
        window.location.replace('../pages/user.html');
    }
}

var allBooks = [];
var filteredBooks = [];
// var allTitles = [];
var user = document.getElementById("user");

user.textContent = `Welcome ${localStorage.getItem("name")}`;

if (localStorage.getItem('allBooks') !== null) {
    allBooks = JSON.parse(localStorage.getItem('allBooks'));
};
if (localStorage.getItem('allTitles') !== null) {
    allTitles = JSON.parse(localStorage.getItem('allTitles'));
};

// Book object constructor
function Book(title, author, copies, city, number, categories) {
    this.title = title;
    this.author = author;
    this.copies = copies;
    this.city = city;
    this.number = number;
    this.categories = categories;
    this.taken = false;
    // allTitles.push(this.title) ; 
    allBooks.push(this);
}

// fill the filtered books depending on categories
function filterByCat(categ) {
    filteredBooks = [];
    for (let i = 0; i < allBooks.length; i++) {
        if (allBooks[i].categories == categ) {
            filteredBooks.push(allBooks[i]);
        }
    }
}
