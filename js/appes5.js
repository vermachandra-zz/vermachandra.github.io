//Book Constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor

function UI() { }

UI.prototype.addBooktoList = function (book) {
    const list = document.getElementById('book-list');
    // create a table row
    const row = document.createElement('tr');
    // insert columns
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td>
<td><a href="#" class= delete>X</a></td>` ;

    list.appendChild(row);

}

UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function (message, clsName) {
    const div = document.createElement('div');
    div.className = `alert ${clsName}`;
    // Add the text Message
    div.appendChild(document.createTextNode(message));
    //Get the parent 
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //Insert Alert
    container.insertBefore(div, form);
    //Time out after 3 seconds
    setTimeout(function () { document.querySelector('.alert').remove() }, 3000);

}

//Delete book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// Event Listeners for Book Addition

document.getElementById('book-form').addEventListener('submit',
    function (e) {
        // Getting Form Values

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        //instantiate the book
        const book = new Book(title, author, isbn);

        //instantiate UI

        const ui = new UI();

        if (title === '' || author === '' || isbn === '') {
            ui.showAlert('Please fill in the fields', 'error');
        } else {
            ui.addBooktoList(book);
            ui.showAlert('Book Added Successfully', 'success')
            ui.clearFields();
        }
        e.preventDefault();
    }
);

// Event Listeners for Book Delete (Event Delegation)

document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    //show Alert
    if (e.target.className === 'delete') { ui.showAlert('Book Removed', 'success'); }

    e.preventDefault();
});





