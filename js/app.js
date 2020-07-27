'use strict'

if (localStorage.getItem("name") === null ){
    window.location.replace('../pages/user.html');
}

var allBooks = [];

if (localStorage.getItem('allBooks') !== null) {
    allBooks = JSON.parse(localStorage.getItem('allBooks'));
};

function Book(title,author,copies,city,location,number){
    this.title = title;
    this.author = author;
    this.copies = copies;
    this.city = city;
    this.location = location;
    this.number = number;
    allBooks.push(this);
};


var user = document.getElementById("user");
user.textContent=`Welcome ${localStorage.getItem("name")}`;