/* var booklist =document.getElementById('book-list');
booklist; */
/* var lis = document.getElementsByTagName('li');
var titles =document.getElementsByClassName('title');
 
Array.from(titles).forEach(function(item){
    console.log(item);
})  */
/* console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles))); */
 /* const wmf = document.querySelector('#book-list li:nth-child(2).name');
 //console.log(wmf);
 books =document.querySelectorAll('#book-list li.name');
Array.from(books).forEach(function(book){
    console.log(book);
}); */
var books = document.querySelectorAll('#books-list li.name');
 Array.from(books).forEach(function(book){
    book.textContent +='(book title)';
 });
 const bookList =document.querySelector('#book-list');
 bookList.innerHTML='<h2>Books and more...</h2>'
 bookList.innerHTML += '<p> This is how you add HTML</p>'