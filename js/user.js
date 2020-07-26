'use strict'

var welcome = document.getElementById("welcome");

welcome.addEventListener("submit", getUserName);

function getUserName(){
    event.preventDefault();
    var name = welcome.name.value;
    SaveInLocalStorage(name);
    console.log(localStorage);
    window.location.replace('../index.html');

}

function SaveInLocalStorage(name){
    localStorage.setItem("name",name);
}