'use strict'

var columnOne = document.getElementById('column1');
var columnTwo = document.getElementById('column2');
var catDiv = document.getElementById("catButtons");
console.log(allBooks);

// create a div that has the books info 
function generateBook(index,array){
    var bookParent = document.createElement('div');

    var image = document.createElement('img');
    var info = document.createElement('ul');
    var title = document.createElement('li');
    var author = document.createElement('li');
    var categories = document.createElement('li');
    var copies = document.createElement('li');
    var city = document.createElement('li');
    var location = document.createElement('li');
    var number = document.createElement('li');

    //in the div
    bookParent.setAttribute('class', 'book');
    image.setAttribute('class', 'cover');
    image.setAttribute('src', '../images/cover2.jpg');
    

    info.setAttribute('class', 'infoList');

    //li elements
    title.innerHTML = array[index].title;
    author.innerHTML = array[index].author;
    categories.innerHTML = array[index].categories;
    copies.innerHTML = array[index].copies;
    city.innerHTML = array[index].city;
    location.innerHTML = array[index].location;
    number.innerHTML = array[index].number;
    
    //button w/ added an onClick event
    var remove = document.createElement('button');
    remove.textContent = 'take book';
    remove.setAttribute('onclick', 'removeBook(' + index + ')');
    remove.setAttribute('class','removeButton');

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

    return bookParent;
}


// append the created div that has the info to the two columns in the html page
function fillCol( array ){
    for (let index = 0; index < array.length; index++) {
        var childdiv;
        if (index % 2 == 0) {
            childdiv=generateBook(index,array);
            columnOne.appendChild(childdiv);
        }else{
            childdiv=generateBook(index,array);
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
function clearCol(){
    columnOne.textContent="";
    columnTwo.textContent="";
}


catDiv.addEventListener('click',generateBookByCat);
function generateBookByCat(){

    clearCol();
    var catId = event.target.id;
    if (catId !== "allCat") {
        filterByCat(catId);
        fillCol(filteredBooks); //filtered books and their function in the app.js    
    } else {
        fillCol(allBooks);
    }

}

// main function here 

fillCol(allBooks);
