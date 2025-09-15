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
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ['fiction', 'non-fiction', 'comic', 'biography', 'science'],
    },
});

const Book = mongoose.model('Book', bookSchema);

let book1 = new Book({
    title: "Comic",
    author: "zuberg",
    price: 800,
    discount: 100,
    category: "comic",
});

book1.save()
.then((res) => console.log("book created"))
.catch((err) => console.log(err));