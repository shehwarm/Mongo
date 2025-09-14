const mongoose = require('mongoose');
const { use } = require('react');

main()
.then((res) => {
    console.log("success");
})
.catch((err) => console.log(err));

async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/test');


}

const userSchema = new mongoose.Schema({
       name: String,
       age: Number,
       email: String,
});

const User = mongoose.model('User', userSchema);

const user1 = new User({
    name: 'John Doe',
    age: 30,
    email: 'johnny@202',
});
user1.save();