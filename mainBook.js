////// Book class ///////

class Book{
    constructor(title, author, isbn, edition){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.edition = edition;
    }
}


////// UI class : handles UI tasks ///////

/// Displaying books
/// Adding books
/// removing books

class UI{
    static displayBooks(book){
        

        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));

    }

    static addBookToList(book){
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
             <td>${book.edition}</td>        
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td> 
            `;

        // We need to append the row to the list of books

        list.appendChild(row);

    }


    static clearField(){
        document.getElementById('title').value = '';
        const author = document.getElementById('author').value = '';
        const isbn = document.getElementById('isbn').value = '';
        const edition = document.getElementById('edition').value = '';
    }
 
    static deleteBook(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
        }
    }


    static showAlert(message, className){
        const div = document.createElement('div');
        div.className =  `container mt-4 alert alert-${className} `;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#form');

        form.insertBefore(div, container);

        // Removing the alert message after 4 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 1700);
    }
}




/////// Store class :  handles storage ///////

class Store{
    static getBooks(){
        let books;
        // Need to check if there's a book on the storage
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}


/////// Events handling

// event displaying books

document.addEventListener('DOMContentLoaded', (book) => UI.displayBooks);

// event adding books

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault;
    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const edition = document.getElementById('edition').value;
    
    // Validation all fiels

    if(title === '' || author === '' || isbn === '' || edition === ''){
        UI.showAlert('Please fill in all Fields', 'danger');
    }
    else{
        // Instantiate Books

        const book = new Book(title, author, isbn, edition);

        // Add book to UI
        UI.addBookToList(book);

        // Showing an alert after adding a new book
        UI.showAlert('Book has been added successfully', 'success');

        // Clear fields
        UI.clearField();

        // Add book to Store
        Store.addBook(book);

    }

    

});

// event removing books

document.getElementById('book-list').addEventListener('click', (e) => {
    // Remove book from the list of books
    UI.deleteBook(e.target);

    // Shows success message after removing the book
    UI.showAlert('Book successfully removed', 'warning');

    // remove book from Store
    Store.removeBook(book);
});













/* <footer class="fixed-bottom bg-info">
        <!-- Social buttons -->
        <ul class="list-unstyled list-inline text-center mt-3">
            <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1">
                <i class="fab fa-facebook-f"> </i>
            </a>
            </li>
            <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1">
                <i class="fab fa-twitter"> </i>
            </a>
            </li>
            <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1">
                <i class="fab fa-google-plus-g"> </i>
            </a>
            </li>
            <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1">
                <i class="fab fa-linkedin-in"> </i>
            </a>
            </li>
            <li class="list-inline-item">
            <a class="btn-floating btn-github mx-1">
                <i class="fab fa-github"> </i>
            </a>
            </li>
        </ul>
        <!-- Social buttons -->
    
        </div>-******************
        <!-- Footer Elements -->
    
        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> Bassam Benidir</a>
        </div>
        <!-- Copyright -->
    
    </footer> */