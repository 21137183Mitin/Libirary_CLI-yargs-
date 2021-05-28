const fs = require('fs');

const addBook = (name, author) => {
    const books = downloadBooks()
    const isExist = books.find(book => book.name === name
                    && book.author === author)
    if(!isExist) {
        books.push({name: name, author, author})
        saveBooks(books)
        console.log(`Book ${name} add in the library`)
    } else {
        console.log(`Book ${name} is already exist, doesn't add in the library`)
    }
}

const deleteBook = (name, author) => {
    const books = downloadBooks()
    const isExist = books.find(book => book.name === name
                    && book.author === author)
    const indexBook = books.findIndex(book => book.name === name
        && book.author === author)
    if(isExist) {
        books.splice(indexBook,1)
        saveBooks(books)
        console.log(`Book ${name} delete from the library`)
    } else {
        console.log(`Book ${name} is doesn't found`)
    }
}

const findBook = (author) => {
    const books = downloadBooks()
    const isExist = books.find(book => book.author === author)
    if(isExist) {
        let sortBook = books.filter(book => book.author == author)
        console.log(`List of books ${author}:`)
        const bookToString = sortBook.map(b=> console.log(b))
        //const bookToString = JSON.stringify(sortBook)
        // console.log(`${bookToString}`)
    } else {
        console.log(`Library is not contain books author ${authot}`)
    }
}

const listBook = () => {
    const books = downloadBooks()
    if(books.length != 0) {
        console.log(`Library books's list:`)
        const bookToString = books.map(b=> console.log(b))
    } else {
        console.log(`Library is empty`) 
    }
}


const saveBooks = (books) => {
    const booksJSON = JSON.stringify(books)
    fs.writeFileSync('books.json', booksJSON)
}

const downloadBooks = () => {
    try {
        const dataBuffer = fs.readFileSync('books.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        
    } catch (error) {
        return []
    }
}

module.exports = {
    addBook: addBook,
    deleteBook: deleteBook,
    findBook: findBook,
    listBook: listBook
}