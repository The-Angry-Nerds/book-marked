'use strict'

if (localStorage.getItem("name") === null ){
    window.location.replace('pages/user.html');
}

var user = document.getElementById("user");
user.textContent=`Welcome ${localStorage.getItem("name")}`;

