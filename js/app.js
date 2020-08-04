'use strict'

if (localStorage.getItem("name") === null ){
    window.location.replace('../../book-marked/pages/user.html');
}


var empty = document.createElement("p");
empty.setAttribute('class','nobooksAvailable');
empty.innerHTML = `No books available`


var allBooks = [];
var filteredBooks = [];


var user = document.getElementById("user");

user.textContent=`Welcome ${localStorage.getItem("name")}`;

if (localStorage.getItem('allBooks') !== null) {
    allBooks = JSON.parse(localStorage.getItem('allBooks'));
};
if (localStorage.getItem('allTitles') !== null) {
    allTitles = JSON.parse(localStorage.getItem('allTitles'));
};

//Default books
if (localStorage.getItem('defaultOnce') == 'false') {
    new Book ('Romeo and Juliet','Shakespear',1,(JSON.parse('{"lat":31.951361,"lng":35.924405,"name":"Amman"}')),'0797987862','Drama');
    new Book ('The Kite Runner','Hosseini',2,(JSON.parse('{"lat":29.52667,"lng": 35.00778,"name":"Aqaba"}')),'0771123156','Drama');
    new Book ('Freakonomics','Stephen J',1,(JSON.parse('{"lat":32.5568,"lng":35.8469,"name":"Irbid"}')),'078231526','Informative');

localStorage.setItem('defaultOnce',true);}



var jsonStringBooks = JSON.stringify(allBooks);
localStorage.setItem('allBooks',jsonStringBooks);

// Book object constructor
function Book(title,author,copies,city,number,categories){
    this.title = title;
    this.author = author;
    this.copies = copies;
    this.city = city;
    this.number = number;
    this.categories=categories;
    this.taken = false;
    // allTitles.push(this.title) ; 
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
