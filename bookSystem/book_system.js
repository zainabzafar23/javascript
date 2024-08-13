//objects
let books=[];

function addBook(){
    const bookName=document.getElementById('bookName').value;
    const authorName =document.getElementById('authorName').value;
    const bookDescription=document.getElementById('bookDescription').value;
    const pagesNumber=document.getElementById('pagesNumber').value;

    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book={
            name:bookName,
            author: authorName,
            description:bookDescription,
            pages:pagesNumber
        };

        books.push(book);
        showbooks();
        clearInputs();

    }
    else{
        alert('please fill in all field correctly');
    }

}

function showbooks(){
    const booksDiv=books.map((book,index)=>`<h1>book number: ${index+1}</h1>
    <p><strong> book name: </strong> ${book.name}</p>
    <p><strong>author name: </strong>${book.author}</p>
    <p><strong> book description: </strong> ${book.description}</p>
    <p><strong> no of pages: </strong> ${book.pages}</p>
    <button onclick="deleteBook(${index})">DELETE</button>`
);

    document.getElementById('books').innerHTML=booksDiv.join('');
}

function deleteBook(index){
    books.splice(index,1);
    showbooks();
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}