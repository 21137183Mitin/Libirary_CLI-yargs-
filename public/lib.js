const yargs = require('yargs');
const books = require('./books');
const author = { type: 'string', demandOption: true, describe: 'Book author' }
const name = { type: 'string', demandOption: true, describe: 'Book\'s name' }

yargs.command({
    command: 'add',
    description: 'Add new book',
    builder: {
        name: name,
        author: author
    },
    handler(argv) {
        books.addBook(argv.name, argv.author)
    }
})

yargs.command({
    command: 'rm',
    description: 'Delete book',
    builder: {
        name: name,
        author: author
    },
    handler(argv) {
        books.deleteBook(argv.name, argv.author)
    }
})

yargs.command({
    command: 'find',
    description: 'Find book by author',
    builder: {
        author: author
    },
    handler(argv) {
        books.findBook(argv.author)
    }
})

yargs.command({
    command: 'list',
    description: 'Show all books',
    handler() {
        books.listBook()
    }
})

yargs.parse()
