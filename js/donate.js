'use strict'

var donateForm = document.getElementById('Donateform');
donateForm.addEventListener('submit', createBook);
console.log("before", allBooks);
function createBook() {
    event.preventDefault();
    var title = event.target.title.value;
    var author = event.target.author.value;
    var copies = Number(event.target.copies.value);
    var city = event.target.city.value;
    var location = event.target.dropLocation.value;
    var number = event.target.phoneNumber.value;
    var categories = event.target.categories.value;

    new Book (title,author,copies,city,location,number,categories);


    var jsonStringBooks = JSON.stringify(allBooks);

    localStorage.setItem('allBooks',jsonStringBooks);
};



// var perviousArray = ;