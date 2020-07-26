'use strict'

console.log(allBooks);

for (let index = 0; index < allBooks.length; index++) {
    var columnid = 'column' + (index+1)
    var parent = document.getElementById(columnid)

    var row = document.createElement('li')
    row.setAttribute('id',index)
    row.innerHTML = allBooks[index]
    parent.appendChild(row);
};