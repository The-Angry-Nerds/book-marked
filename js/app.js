'use strict'

if (localStorage.getItem("name") === null ){
    window.location.replace('../pages/user.html');
}

var allBooks = [];
var filteredBooks = [];
var user = document.getElementById("user");

user.textContent=`Welcome ${localStorage.getItem("name")}`;

if (localStorage.getItem('allBooks') !== null) {
    allBooks = JSON.parse(localStorage.getItem('allBooks'));
};

// Book object constructor
function Book(title,author,copies,city,location,number,categories){
    this.title = title;
    this.author = author;
    this.copies = copies;
    this.city = city;
    this.location = location;
    this.number = number;
    this.categories=categories
    allBooks.push(this);
}

// fill the filtered books depending on categories
function filterByCat( categ ){
    filteredBooks = [];
    for (let i = 0; i < allBooks.length; i++) {
        if (allBooks[i].categories == categ ) {
            filteredBooks.push(allBooks[i]);
        }
    }
}
