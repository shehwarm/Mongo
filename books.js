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

