// Step 1: Define the Book Class
class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

    // Method to return book information as a string
    getInfo() {
        return `${this.title} by ${this.author}, published in ${this.year}, Genre: ${this.genre}`;
    }
}

// Step 2: Define the Library Class
class Library {
    constructor() {
        this.books = []; // Initializes an empty array to store books
    }

    // Method to add a new book to the library
    addBook(book) {
        this.books.push(book);
    }

    // Method to filter books published after a given year
    filterBooksByYear(year) {
        return this.books.filter(book => book.year > year);
    }

    // Method to return an array of all book titles
    getAllBookTitles() {
        return this.books.map(book => book.title);
    }

    // Method to calculate the total number of books
    getTotalBooks() {
        return this.books.length;
    }

    // Method to calculate the average publication year of all books
    getAveragePublicationYear() {
        if (this.books.length === 0) return 0; // Avoid division by zero
        const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
        return totalYears / this.books.length;
    }
}

// Step 3: Define a factory function to create new books
function createBook(title, author, year, genre) {
    return new Book(title, author, year, genre);
}

// Step 4: Example Usage

// Create a new library
const myLibrary = new Library();

// Add books to the library using the factory function
myLibrary.addBook(createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction"));
myLibrary.addBook(createBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction"));
myLibrary.addBook(createBook("1984", "George Orwell", 1949, "Dystopian"));
myLibrary.addBook(createBook("The Hobbit", "J.R.R. Tolkien", 1937, "Fantasy"));

// Test Library methods
console.log(myLibrary.getAllBookTitles()); // ["The Great Gatsby", "To Kill a Mockingbird", "1984", "The Hobbit"]
console.log(myLibrary.getTotalBooks()); // 4
console.log(myLibrary.filterBooksByYear(1950)); // Books published after 1950
console.log(myLibrary.getAveragePublicationYear()); // Average publication year of all books
console.log(myLibrary.books)


