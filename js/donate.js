'use strict'

var confirmParent = document.getElementById("confirm");



var donateForm = document.getElementById('Donateform');
donateForm.addEventListener('submit', createBook);
function createBook() {
    event.preventDefault();
    var title = event.target.title.value;
    var author = event.target.author.value;
    var copies = Number(event.target.copies.value);
    // var parsedCity = JSON.parse(event.target.city.value); 
    var city = JSON.parse(event.target.city.value);
    var number = event.target.phoneNumber.value;
    var categories = event.target.categories.value;

    new Book (title,author,copies,city,number,categories);


    var jsonStringBooks = JSON.stringify(allBooks);
    localStorage.setItem('allBooks',jsonStringBooks);

    // var jsonStringTitles = JSON.stringify(allTitles);
    // localStorage.setItem('allTitles',jsonStringTitles);

    confirmParent.style.display = "block";
    donateForm.reset();

};

var span = document.createElement("span");
function Modal(){
    var secondDiv = document.createElement("div")
    secondDiv.setAttribute('id','secondDiv');
    span.setAttribute('id','span');
    span.innerHTML = 'x';
    var confirm = document.createElement('p');
    confirm.setAttribute('id','confirmationMsg');
    confirm.textContent = 'Book added successfully';
    var link = document.createElement('a');
    link.setAttribute('href', 'library.html');
    link.innerHTML = 'Click here to check the books at the library';
    secondDiv.append(span);
    secondDiv.append(confirm);
    secondDiv.append(link);
    confirmParent.append(secondDiv);
  
  };


  span.onclick = function () {
    confirmParent.style.display = 'none';
  }
  window.onclick = function (event) {
    if (event.target == confirmParent) {
        confirmParent.style.display = 'none';
    };
  };

  Modal()

// var perviousArray = ;
