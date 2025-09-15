const mongoose = require('mongoose');

main()
.then((res) => {
    console.log("success");
})
.catch((err) => console.log(err));

async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
});

const Book = mongoose.model('Book', bookSchema);

let book1 = new Book({
    title: "Book One",
    author: "Author One",
    price: 1200,
});
book1.save()
.then((res) => console.log("book created"))
.catch((err) => console.log(err));